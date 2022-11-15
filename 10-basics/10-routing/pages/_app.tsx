import "../styles/globals.css"
import type { AppProps } from "next/app"

// See `/pages/news/[newsId].js` for dynamic paths
// See `pages/news/index.tsx` for navigation using <Link>

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
