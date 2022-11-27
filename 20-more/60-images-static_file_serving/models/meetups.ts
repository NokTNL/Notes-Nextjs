import { z } from "zod"

export const meetupSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  address: z.string(),
  description: z.string(),
})

export type Meetup = z.infer<typeof meetupSchema>
