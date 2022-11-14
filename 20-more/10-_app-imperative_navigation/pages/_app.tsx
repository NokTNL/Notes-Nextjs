import Layout from "components/layout/Layout"
import { AppProps } from "next/app"
import "../styles/globals.css"

// Go to HERE on how to use custom App component
// Go to `pages/new-meetup.tsx` on how to use imperative navigation

// !!! NOTE: with Next v13 introducing server component, things in _app.js can be moved to the `/app` folder

// Without an `_app.js`, Next will render whatever page via a default `App` component and render whatever pages inside as its children: (below is simplified:)
function App() {
  return (
    <div id="__next" children={"" /* whatever page component is rendered */} />
  )
}

// With an `_app.js` defined, the default App.js will be overriden and the default export from this file will instead be used
// You can use it to wrap layouts/context providers/whatever stuff around the page component you want to render
// Our custom `App` will receives AppProps from Next:
// `Component` is the page comp rendered
// `pageProps` is some other props that our page comp will receive
// !!! remember to import "styles/globals.css" as well!
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
