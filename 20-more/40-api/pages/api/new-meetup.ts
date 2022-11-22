// Each file inside `/pages/api` will become an API route in your BE. The route name corresponds to the file name
// e.g. the file `/api/new-meetup.js` will become the ROUTE `/api/new-meetup`
// You can even have credentials inside this file, as this file will NEVER run on the client

import { meetupSchema } from "models/meetups"
import { NextApiRequest, NextApiResponse } from "next"

const reqDataSchema = meetupSchema.omit({ id: true })

// Export default the handler that will process incoming requests
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // `req` contains method, body, headers, etc.
  if (req.method === "POST") {
    const reqBody = JSON.parse(req.body)
    const typedMeetup = reqDataSchema.parse(reqBody)

    // Communicate with our DB, here is the pseudocode:
    // db.meetups.push({ ...typedMeetup, id: Math.random().toString() })

    // Response status '201' to indicate success + something has been created
    res.status(201).json({ message: "Meetup created!" })
  }
}
