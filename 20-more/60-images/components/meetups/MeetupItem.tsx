import Image from "next/image"
import Link from "next/link"
import Card from "../ui/Card"
import classes from "./MeetupItem.module.css"

type MeetupItemProps = {
  id: string
  image: string
  title: string
  address: string
}

function MeetupItem(props: MeetupItemProps) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          {/* `next/image` provides optimisation over normal <img> elements thanks to its LOADER (https://nextjs.org/docs/basic-features/image-optimization#loaders). It:
            - Prevents layout shift by automatically reserve space for the image (if the image is available at build time so Next can know its dimensions)
              - This improves Core Web Vitals score
              - Alternativeliy, simply always specify sizes for images (see the corresponding CSS module file)
            - Generates `srcset` for you to automatically to serve images of different sizes according to device screen size
            - Lazy loading (only loaded when entering viewport)
          */}
          {/* <Image> works only on STATIC IMPORT of local images by default. */}
          {/* To allow remote images you need to set it up in next.config.js: https://nextjs.org/docs/api-reference/next/image#remote-patterns */}
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/meetups/${props.id}`}>Show Details</Link>
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
