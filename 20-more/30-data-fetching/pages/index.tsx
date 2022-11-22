import MeetupList from "../components/meetups/MeetupList"
import { Meetup } from "models/meetups"
import {
  GetServerSideProps,
  GetStaticProps,
  GetServerSidePropsContext,
  InferGetStaticPropsType,
} from "next"

type HomeProps = {
  meetups: Meetup[]
}

// When we use static generation for pre-rendering, it only ships the page rendered after the FIRST RENDER CYCLE. Therefore, if we need to wait for data to update the rendered UI, e.g. from an API call, that data result will not be pre-rendered; instead, it is up to the CLIENT to fetch the data (e.g. in `useEffect`) and render it on the screen.
// This is NOT WRONG, but we have the option to put this step to the server as well, using `getStaticProps`

const DUMMY_METTUPS: Meetup[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://picsum.photos/200",
    address: "Some address",
    description: "Some description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://picsum.photos/200",
    address: "Some address",
    description: "Some description",
  },
]

// `getStaticProps` is designed for fetching data from a server before the page component is rendered at build time
// When defined, it will be run BEFORE the default page export
// If it is an async function, then NextJS will wait until the Promise is resolved before rendering the page component
// NOTE: this export only works in page components in /pages (i.e. _app.js also doesn't work), and the function must be named exactly `getStaticProps`
//
//           vvv Note: You may not need the `GetStaticProps` type assertion here; it will infer return type for you if you don't assert it
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  /**
   * e.g. run some data fetching code here, then:
   */
  return {
    // `props` of the returned value will be passed into the page component as props
    props: {
      meetups: DUMMY_METTUPS,
    },
    /**
     * Incremental Static generation (ISR)
     */
    // If data will be updated more frequently, you can revalidate the props from time to time --> not totally static!
    // The page will be regenerated if 1. a new request come in, and, 2. the `revalidate` (in seconds) time has passed
    // !!! NOTE: `getStaticPaths` will run on EVERY request in development mode (`next dev`), regardless of the path existing or not
    revalidate: 10,
  }
}

// Alternatively, you can use `getServerSideProps` which makes the page SERVER-SIDE RENDERED, i.e. generates a new page on each client request, at runtime
// This is also the only option if you need access to the request/result object from the incoming client request
// Note: I name it here with underscore to prevent Next using it
export const getServerSideProps_ = async (
  context: GetServerSidePropsContext
) => {
  const req = context.req
  const res = context.res
  /**
   * e.g. run some data-fetching code here, then:
   */
  return {
    props: {
      meetups: DUMMY_METTUPS,
    },
  }
}

export default function Home({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MeetupList meetups={meetups} />
}
