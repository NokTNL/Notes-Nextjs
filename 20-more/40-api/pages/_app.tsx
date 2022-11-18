import Layout from "components/layout/Layout"
import { AppProps } from "next/app"
import "../styles/globals.css"

// Go to /pages/api for writing BE code inside NextJS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
