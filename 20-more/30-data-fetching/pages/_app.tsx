import Layout from "components/layout/Layout"
import { AppProps } from "next/app"
import "../styles/globals.css"

// Go to /pages/index.tsx for getStaticProps (Static Generation with data) & getServerSideProps (Server-Side Rendered with data)
// Go to /pages/meetups/[meetupId].tsx for getStaticPaths (dynamically rendered SSG)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
