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
          {/**
           * Static file serving
           */}
          {/* - NextJS has a `/public` folder that:
                  - If you put assets in it, they will be served by the server and accessible everywhere (both in your code and in the browser) by a URL (e.g. `/icons/example.jpeg` in your code, or `localhost:3000/icons/example.jpeg` in the browser). 
                  - It works pretty much the same way as the `/pages` folder. In fact, you CANNOT have two files with the same pathname in these two folders!
          */}
          {/**
           * Image importing
           */}
          {/* You can STATICALLY import images from ANYWHERE in the project (not limited to the `/public` folder), and NextJS will bundle it for you automatically:
              ```
              import xxxxPNG from './xxx.png'
              (...)
              <img src={xxxxPNG}/>
              ```
          */}
          {/* Additionally for SVG, if you want to use them as React components, you may want to hard-code them as React components, or use something like SVGR to transform it from static assets (.svg files) to React components for you */}
          {/* Otherwise, you can always serve it in '/public' or other servers, and use it as a string URL in an <img> element. They will be considered as remote resources */}

          {/**
           * Image optimisation
           */}
          {/* `next/image` provides optimisation over normal <img> elements thanks to its LOADER (https://nextjs.org/docs/basic-features/image-optimization#loaders). It:
            - Prevents layout shift by automatically reserve space for the image (if the image is available at build time so Next can know its dimensions)
                - This improves Core Web Vitals score
            - Generates `srcset` for you to automatically to serve images of different sizes according to device screen size
            - Lazy loading (only loaded when entering viewport)
          */}
          {/* !!! The loader does NOT optimise SVG by default, because they are both not needed and not secure: https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg 
                - However, you can still use <Image> with SVGs, only that it will treat as images and not able to change the attributes inside */}
          {/* !!! For securities reason, <Image> works only on LOCAL images by default, i.e. only images from the same origin (most probably served from `/public`) */}
          {/*   - To allow remote images you need to set it up in next.config.js: https://nextjs.org/docs/api-reference/next/image#remote-patterns */}
          {/* - For images provided with STATIC IMPORTS (i.e. only possible for LOCAL images), you don't need to provide `width` or `height`, as they are already known. But you can specify one/both of them to resize the image. The loader wll take the lowest dimension while keeping the aspect ratio */}
          {/* - For images provided as a string URL without static importing (local & remote alike), you will need to specify width & height (because NextJS doesn't know these!), or use `fill` which means it will fill and take its parent's dimension, otherwise will throw errors
              - You should do it even for normal <img> elements to prevent layout shifts, e.g. <img width='100' height='200' />. See https://web.dev/optimize-cls/#images-without-dimensions */}
          <Image src={props.image} alt={props.title} width={500} height={500} />
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
