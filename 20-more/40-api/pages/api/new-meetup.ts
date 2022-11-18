// Each file inside `/pages/api` will become an API route in your BE. The route name corresponds to the file name
// e.g. the file `/api/new-meetup.js` will become the ROUTE `/api/new-meetup`
// You can even have credentials inside this file, as this file will NEVER run on the client

import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

const ReqDataSchema = z.object({
  title: z.string(),
  image: z.string(),
  address: z.string(),
  description: z.string(),
})

type Data = {}

// Export default the handler that will process incoming requests
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // `req` contains method, body, headers, etc.
  if (req.method === "POST") {
    const { title, image, address, description } = ReqDataSchema.parse(req.body)
  }
}
