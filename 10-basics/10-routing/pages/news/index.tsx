import Link from "next/link"

// - In a browser, when you click on an `<a>` that visits a new URL, by default it will send a new HTTP request to fetch a new page, and ALL APP STATES WILL BE LOST.
// - Next Router (& React Router) uses CLIENT-SIDE ROUTING to override the default browser behaviour
//   - In React Router, you can use `<Link>` to achieve that
//   - You can do the same in Next, EXCEPT because pages in Next are code-splitted, it does send a new request to fetch the ADDITIONAL page files it needs the FIRST time it loads the new page (i.e. app state will not be lost). The next time you visit the same page, it will not re-fetch files.

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <Link href="/news/special">Go to Details Page</Link>
      <Link href="/">Go to Home</Link>
    </>
  )
}
