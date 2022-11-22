import MeetupList from "../components/meetups/MeetupList"
import { InferGetStaticPropsType } from "next"
import { Meetup, meetupSchema } from "models/meetups"
import { z } from "zod"

const meetupsResponseSchema = z.array(meetupSchema)

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

export const getStaticProps = async () => {
  console.log(`getStaticProps run in /pages/index.tsx`)

  // Remember, `getStaticProps` NEVER runs on the client side and only at build time/on the server(when using ISR)! Therefore, it has direct access to DB
  // e.g. const result = await db.connect().getResult() <--- pseudo-code

  // Alternatively, you can use fetch() here to fetch data from an external API (that has the data ready at BUILD time)
  // NOTE: using fetch() here in server-side code is possible only because of NextJS's polyfill.
  // NOTE: In `getStaticProps` you CANNOT use an API route. This is because the server won't have a 'server' to get data from during build time! NextJS will fail the build if you use API route's local path here.

  // Here we keep using the dummy data though, imagining it is taken from the DB
  const response = DUMMY_METTUPS
  const typedMeetups = meetupsResponseSchema.parse(response)

  return {
    props: {
      meetups: typedMeetups,
    },
    revalidate: 10, // <--- this will make the page up to date periodically
  }
}

export default function Home({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MeetupList meetups={meetups} />
}
