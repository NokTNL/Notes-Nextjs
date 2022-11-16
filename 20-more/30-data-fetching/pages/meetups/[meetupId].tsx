import { MeetupDetail } from "components/meetups/MeetupDetail"
import { Meetup } from "models/meetups"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { z } from "zod"

const PathParam = z.object({
  meetupId: z.string(),
})

type PathParamType = z.infer<typeof PathParam>

type MeetupDetailsProps = {
  meetupData: Meetup
}

export function _MeetupDetails() {
  // When we use dynamic paths with SSG, the pre-rendered page actually DOES NOT have the path params defined!
  // Example:
  const router = useRouter()
  const meetupId = router.query.meetupId // <-- it will be `undefined` at build time

  return (
    <>
      {meetupId === "1" ? (
        <MeetupDetail
          title="A First Meetup"
          imgUrl="https://picsum.photos/200"
          address="Some address"
          description="Some description"
        />
      ) : (
        <h1>404 not found</h1> // <-- Therefore this will be rendered at build time. Only at the client side, the component is updated because a route is now available
      )}
    </>
  )
}

// You most probably will fetch different data based on the params defined. Therefore, dynamic route + getStaticProps is designed to throw because it does not know what route to expect, UNLESS you tell Next explicitly the paths to expect
//  - Note: This is not a problem for SSR (which generates a new page dynamically based on what params are in the request), or pre-rendered without getStaticProps (data fetching delegated to the client)
// This can be done with `getStaticPaths`, which tells Next the list of paths to expect

//                                          v the expected structure of a `params` (the 'path' / 'query')
export const getStaticPaths: GetStaticPaths<PathParamType> = async (a) => {
  console.log("getStaticPaths")
  /**
   * e.g. do some data fetching here
   */
  const listOfAvailableIds = ["m1", "m2"]

  return {
    // `paths` denotes the list of all types of params object Next should expect
    paths: listOfAvailableIds.map((id) => ({
      params: {
        meetupId: id,
      },
    })),
    // `fallback` indicates the behaviour if the incoming dynamic path does not satisfy what is specified in the `paths` array above.
    // - `fallback: false`:
    //   - At build time, only build for the defiend paths
    //   - At runtime, renders '404 not found' page when the path is a nomatch
    // - `fallback: true`: (https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-true)
    //   - At build time, additional to the paths specified, render an extra 'fallback' page comoponent that:
    //     - Has `router.isFallback` set to true
    //     - Has empty page props `{}` passed in
    //   - At Runtime, if the path is a nomatch to the pre-defined paths, browser will be served the fallback page first, then the new page will be SERVER-RENDERED (by running `getStaticProps` to get the new page props) and sent to the client to replace the fallback page
    //   - The newly generated page (with the associated new path) will be cached on the server, so visiting the same path next time will not trigger re-rendering
    //   - This is useful when there are too many pages to pre-render at build time, which can be very slow
    // - `fallback: 'blocking'`: Similar to `true`, except no fallback page will be served, new page only appears when the server-side rendering for the new page is finished (hence 'blocking')
    // !!! NOTE: `getStaticPaths` will run on EVERY request in development mode `next dev`, regardless of the static path existing or not
    fallback: true,
  }
}

// At build time (and runtime when page is regenerated for non-existing static paths), each path from `getStaticPaths` will call `getStaticProps` and pass the params inside via the `context` object (!!! different from `getServerSideProps`'s context!)

export const getStaticProps: GetStaticProps<MeetupDetailsProps> = async (
  context // <--- params from `getStaticPaths` (at build time) / from the URL (at runtime, if path hasn't been generated)
) => {
  // Use runtime schema check with zod; will thorw if schema fails
  const params = PathParam.parse(context.params)

  const meetupId = params.meetupId
  console.log(`getStaticProps called with meetupId ${meetupId}`)

  /**
   * e.g. do some data fetching here based on the id
   */
  const meetupData = {
    id: meetupId,
    title: "A First Meetup",
    image: "https://picsum.photos/200",
    address: "Some address",
    description: "Some description",
  }

  return {
    props: {
      meetupData,
    },
  }
}

// Next provides the `InferGetStaticPropsType` to get the type directly from the function `getStaticProps` (similar for `getServerSideProps`)
// - Note: for a fallback page, the props passed in can be an empty {}. We should test for router.isFallback at the very beginning inside the component, otherwise we have to mark the props as Partial<T> to indicate all fields are optional in the props.
export default function MeetupDetails(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter()

  // test for router.isFallback, otherwise need typeguard to filter empty props
  if (router.isFallback) {
    return <h1>MeetupId: (fallback)</h1>
  }

  const { meetupData } = props

  return (
    <>
      {/* Now the `meetupId` param appears here via *static props* (NOT the runtime router.query!!!) */}
      <h1>MeetupId: {meetupData.id}</h1>{" "}
      <MeetupDetail
        title={meetupData.title}
        imgUrl={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  )
}
