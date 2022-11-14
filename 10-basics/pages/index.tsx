import Link from "next/link"

// See `/pages/news/[newsId].js` for how to extract the param in a component
// See `pages/news/index.tsx` for <Link>s usage

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/news">Go to News</Link>
    </>
  )
}
