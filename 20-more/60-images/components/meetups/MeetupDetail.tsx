import Image from "next/image"
import classes from "./MeetupDetail.module.css"

type MeetupDetailProps = {
  imgUrl: string
  title: string
  address: string
  description: string
}
export function MeetupDetail({
  imgUrl,
  title,
  address,
  description,
}: MeetupDetailProps) {
  return (
    <section className={classes.details}>
      <Image src={imgUrl} alt="Meetup location" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}
