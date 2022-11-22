import MeetupList from "../components/meetups/MeetupList"
import { InferGetStaticPropsType } from "next"
import { Meetup, meetupSchema } from "models/meetups"
import Head from "next/head"
import { z } from "zod"

const meetupsResponseSchema = z.array(meetupSchema)

const DUMMY_METTUPS: Meetup[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://picsum.photos/500",
    address: "Some address",
    description: "Some description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://picsum.photos/500",
    address: "Some address",
    description: "Some description",
  },
]

export const getStaticProps = async () => {
  console.log(`getStaticProps run in /pages/index.tsx`)

  // Dummy data
  const response = DUMMY_METTUPS
  const typedMeetups = meetupsResponseSchema.parse(response)

  return {
    props: {
      meetups: typedMeetups,
    },
    revalidate: 10,
  }
}

// For each page component, you can use a <Head> component from `next/head` to define the metadata you need
// Each page component will need to have its own
// It is not sugegsted to add <script> inside <Head>; use `next/script` instead

export default function Home({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          // These 'attributes' can be dynamic as well
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}
