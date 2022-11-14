import Layout from "components/layout/Layout"
import { AppProps } from "next/app"

// HERE for styling options

// 1. GLOBAL STYLES
// Like CRA, NextJS supports syntax like `import "globals.css"` which is not valid JS syntax. It simply means bundling the CSS file during build.
// You should ONLY import your global stylsheet in `pages/_app.js` to avoid name conflicts
import "../styles/globals.css"
// If you use npm for managing your UI library's CSS, you can import the css from the `node_modules` as well, e.g. :
//   import 'bootstrap/dist/css/bootstrap.css'
// This kind of library CSS import is permitted ANYWHERE in the app, not just `_app.js`

// 2. Comoponent level styles
// NextJS supports CSS/SASS/SCSS modules, but you need to install the `sass` package
// Modules ends with .module.css, .module..sass OR .module.scss

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
