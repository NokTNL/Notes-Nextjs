import Link from "next/link"

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <Link href="/news/special">Go to Details Page</Link>
      <Link href="/">Go to Home</Link>
    </>
  )
}
