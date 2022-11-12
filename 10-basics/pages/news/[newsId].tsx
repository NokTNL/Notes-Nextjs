// Use the `useRouter` hook from Next to extract parameters
import { useRouter } from "next/router";

export default function DetailPage() {
  // Access the router object
  const router = useRouter();
  // extract param from router.query
  const { newsId, pid } = router.query;

  return (
    <>
      <h1>The Details Page</h1>
      <p>NewsId: {newsId}</p>
      <p>pid: {pid}</p>
    </>
  );
}
