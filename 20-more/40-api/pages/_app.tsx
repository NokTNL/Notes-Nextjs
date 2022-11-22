import Layout from "components/layout/Layout"
import { AppProps } from "next/app"
import "../styles/globals.css"

// Go to /pages/api/new-meetup for writing BE code inside NextJS
// Go to /pages/new-meetup.tsx for how to use the api route
// Go to /pages/index.tsx to see how to use the DB directly in pre-rendered pages without using an API route

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
