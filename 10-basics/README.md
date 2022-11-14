## Installation

- `yarn create next-app` . It will ask you if you want TS/ESLint support

## Run dev server

- `yarn dev`

## Folder structure

- Each file inside the `pages` folder represents a _Route_. Therefore, `index.js` represents the URL `/`, `about.js` represents the URL `/about`, etc.
  - The page component you want must be DEFAULT EXPORTED so that Next can find it
  - Nested folder structure will have NESTED ROUTES as well, e.g. `/news/index.js` also represents the route `/news`
- Each "page" in Next is **pre-rendered** (HTML page hydrated on server, then served to the client) and **code-splitted** (page code only requested when visiting that page)
  - Next by default will use **static generation** for pre-rendering, i.e. the page is generated at build time, and then reused by all clients. Alternatively, you can choose **server-side rendering** that a new page is generated on each client request.

## Routing

- You can specify dynamic URL paths and parameters. Files with with square brackets in the file name will be treated as dynamic paths. Let say we have this folder structure:
  ```
  /news
  L__ index.js
  L__ [newsId].js
  ```
  - URL `/news` will render the page `/news/index.js`
  - URL `/news/something-important` will render the page `/news/[newsId].js` with param `{newsId: something-important}`
  - URL `/news/something-important?pid=1` will be the same, but have params `{ newsId: something-important, pid: 1 }`
- See `/pages/news/[newsId].js` for how to extract the param

- Remember when you have an `<a>` that visits a new path inside your app, by default it will send a new HTTP request to fetch a new page, and ALL APP STATES WILL BE LOST.
  - In React Router, you can use `<Link>` to prevent default reloading and just chaning the URL
  - You can do the same in Next, EXCEPT because pages in Next are code-splitted, it does send a new request to fetch the ADDITIONAL files it needs the FIRST time it loads the new page (i.e. app state will not be lost). The next time you visit the same page, it will not re-fetch files.
  - See `pages/news/index.tsx` for usage
