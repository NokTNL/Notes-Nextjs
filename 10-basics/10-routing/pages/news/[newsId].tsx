// - Files with with square brackets in the file name will be treated as dynamic paths.
//   - NOTE: It must starts & ends with [] to make it work. `a[id].tsx` does not work as dynamic URL, but will be taken literally as the path `/a[id]`
// - Let say we have this folder structure:
//
//   /news
//   L__ index.js
//   L__ [newsId].js
//
//   - URL `/news` will render the page `/news/index.js`
//   - URL `/news/something-important` will render the page `/news/[newsId].js` with param `{newsId: something-important}`
//   - URL `/news/something-important?pid=1` will be the same, but have params `{ newsId: something-important, pid: 1 }`
//
// To use the params from the path inside a component, you need to access the router object at RUNTIME

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
