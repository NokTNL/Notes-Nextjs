import NewMeetupForm from "components/meetups/NewMeetupForm"
import { Meetup } from "models/meetups"
import { useRouter } from "next/router"
import { z } from "zod"

const NewMeetupApiResultSchema = z.object({
  message: z.string(),
})

export default function NewMeetup() {
  const router = useRouter()

  const handleAddNewMeetup = async (inputMeetupData: Omit<Meetup, "id">) => {
    // You can use a NextJS API route on the FE by the route's LOCAL PATH (instead of "https://xxxx.com/api/path")
    // This is because the webpage & the server are served from the same domain!
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(inputMeetupData),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText)
      } else {
        return res.json()
      }
    })

    const typedResponse = NewMeetupApiResultSchema.parse(response)
    alert(typedResponse.message)

    // Imperatively navigate to a certain URL
    router.push("/")
  }

  return <NewMeetupForm onAddMeetup={handleAddNewMeetup} />
}
