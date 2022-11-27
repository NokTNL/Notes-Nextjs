import Layout from "components/layout/Layout"
import { AppProps } from "next/app"
import "../styles/globals.css"

// Go to /components/meetups/MeetupItem.tsx for image optimisation

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
