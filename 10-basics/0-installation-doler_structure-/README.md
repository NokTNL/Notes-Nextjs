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
