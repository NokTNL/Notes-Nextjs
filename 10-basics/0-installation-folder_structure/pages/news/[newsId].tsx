// Use the `useRouter` hook from Next to access the router object
import { useRouter } from "next/router"

export default function DetailPage() {
  // Access the router object. It stores the states and methods regarding the router
  const router = useRouter()
  // extract URL param from router.query
  const { newsId, pid } = router.query

  return (
    <>
      <h1>The Details Page</h1>
      <p>NewsId: {newsId}</p>
      <p>pid: {pid}</p>
    </>
  )
}
