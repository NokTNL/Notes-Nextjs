import MeetupList from "../components/meetups/MeetupList"
import { Meetup } from "models/meetups"
import Layout from "components/layout/Layout"

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

export default function Home() {
  return <MeetupList meetups={DUMMY_METTUPS} />
}
