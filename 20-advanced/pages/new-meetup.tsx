import NewMeetupForm from "components/meetups/NewMeetupForm"
import { useRouter } from "next/router"

export default function NewMeetup() {
  // Use the same useRouter hook to access the router object
  const router = useRouter()
  return (
    <NewMeetupForm
      onAddMeetup={() => {
        // Imperatively navigate to a certain URL
        router.push("/")
      }}
    />
  )
}
