## NextJS SSR Kit

![XhgJKxh.png](https://i.imgur.com/XhgJKxh.png)

## Table of contents

[Pre-Configured](#pre-configured)

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Example API](#example-api)

[NextJS Configuration](#nextjs-configuration)

[API Configuration](#api-configuration)

[Packages Incorporated](#packages-incorporated)

[Client and API Integrations](#client-and-api-integrations)

[Known Issues](#known-issues)

<hr />

## Pre-Configured

✔️ ES6 import/export on client and API syntax.

✔️ CSS/SCSS module and global imports.

✔️ Redux + Redux + Redux Saga implementation.

✔️ Styled-components implementation.

✔️ Custom 404 error page.

✔️ Custom Express server with interactive API.

<hr />

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .next
├── actions
├── build
├── components
├── env
├── images
├── pages
├── paths
├── public
├── reducers
├── sagas
├── server
|   ├── controllers
|   ├── database
|   ├── helpers
|   ├── middlewares
|   ├── models
|   ├── routes
|   ├── app.js
|   └── jest.json
├── styles
├── types
├── utils
├── .browserslistrc
├── .npmrc
├── .prettierc
├── babel.config.js
├── jest.json
├── next.config.json
└── nodemon.json
</code></pre>
</details>
<br />

<hr />

## Installation

1 - Clone the repository.

```
git clone git@github.com:mattcarlotta/nextjs-ssr-kit.git
```

2 - Run `yarn install` to install dependencies.

3 - While at the application's root directory, start both servers by running `yarn dev`.

<hr />

## Commands

| `yarn <command>`     | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `compile`            | Compiles server application to a `build` folder.                         |
| `checkbuild`         | Checks to see if the `.next/static` folder is ES5 compliant (for IE11).  |
| `dev`                | Starts both servers (client: `localhost:3000`, API: `localhost:5000`).   |
| `build`              | Compiles client application to a `.next` folder.                         |
| `production`         | Executes `build` and `compile` commands in sequence.                     |
| `start`              | Starts a production server at `localhost:8080` (must run `production`).† |
| `test`               | Runs `.test.js` files for the client and server.                         |
| `test:front`         | Runs `.test.js` files for the client only.                               |
| `test:frontcov`      | Runs `.test.js` files for the client with code coverage.                 |
| `test:frontwatch`    | Runs and watches changed `.test.js` files for the client.                |
| `test:frontwatchall` | Runs and watches all `.test.js` files for the client.                    |
| `test:back`          | Runs `.test.js` files for the server only.                               |
| `test:backcov`       | Runs `.test.js` files for the server with code coverage.                 |
| `test:backwatch`     | Runs and watches `.test.js` files for the server.                        |

† Note: Before running this command, you must edit the <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/env/.env.production#L4">env/.env.production</a> file and update the `baseURL` from `http://localhost:8080/api/` to include your remote server address!

<hr />

## Example API

Provided in this boilerplate is an example of how to integrate a RESTFUL API (utilizing MongoDB).

If you wish to utilize the API:

- <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition">Install MongoDB</a> and make sure the service is up and running.
- Navigate to `http://localhost:5000/users` to interact with the API from the client-side.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand nextJS configuration</summary>
<pre><code>
- actions: redux actions.
- components: react components.
- env: environment variables.
- pages/_app,js: nextjs app configuration (redux + redux saga + global stylesheet).
- pages/_document.js: nextjs document configuration for styled-components.
- pages/_error.js: nextjs fallback 404 page.
- paths: webpack paths.
- reducers: redux reducers.
- sagas: redux sagas.
- server: custom express server configuration.
- store: redux store configuration.
- styles: custom component/page styles.
- types: redux constants.
- utils/__mocks__/mockAxios.js: a mocked axios instance for testing.
- utils/setupTest/index.js: enzyme test setup for your React components.
- utils/axiosConfig/index.js: custom axios configuration.
- utils/parseResponse/index.js: custom saga functions functions.
- .browserslistrc: browsers list config (for babel transpiling).
- .prettierc: prettier config.
- babel.config.js: babel config.
- jest.json: jest config for client.
- next.config.js: nextJS webpack config (added support for CSS and Image imports).
- nodemon.json: nodemon configuration for server restarts.
</code></pre>
</details>
<br />

## API Configuration

<details>
<summary>Click to expand API configuration</summary>
<pre><code>
- server/controllers: express route controllers.
- server/database: mongoose connection to local mongodb.
- server/helpers: configurations for running a test environment and misc. helper functions.
- server/middlewares: express middlewares.
- server/models: mongoose models for a local mongodb.
- server/routes: express routes.
- server/seeds: mongo seed file.
- server/app.js: API initialization configuration (using babel-node for ES6 import/export syntax)
</code></pre>
</details>
<br />

<hr />

## Packages Incorporated

Click <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/package.json#L30-L97">here</a> to see latest versions.

### Shared

<details>
<summary>Click to expand brief overview of client packages</summary>
<pre><code>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/typicode/husky">Husky</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/lodash/lodash">Lodash</a>
- <a href="https://github.com/zeit/next.js">NextJS</a>
- <a href="https://github.com/zeit/next-plugins">NextJS CSS</a>
- <a href="https://github.com/twopluszero/next-images">NextJS Images</a>
- <a href="https://github.com/kirill-konshin/next-redux-wrapper">NextJS Redux</a> 
- <a href="https://github.com/bmealhouse/next-redux-saga">NextJS Redux-Saga</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/prop-types">PropTypes</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/fkhadra/react-toastify">React Toastify</a>
- <a href="https://github.com/reduxjs/redux">Redux</a>
- <a href="https://github.com/zalmoxisus/redux-devtools-extension">Redux DevTools Extension</a>
- <a href="https://redux-saga.js.org/">Redux Saga</a>
- <a href="https://github.com/webpack-contrib/sass-loader">Sass Loader</a>
- <a href="https://github.com/styled-components/styled-components">Stylized Components</a>
- <a href="https://github.com/webpack/webpack">Webpack</a>
</code></pre>
</details>
<br />

### API Specific

<details>
<summary>Click to expand brief overview of API packages</summary>
<pre><code>
- <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>
- <a href="https://github.com/expressjs/body-parser">Body Parser</a>
- <a href="https://github.com/expressjs/compression">Compression</a>
- <a href="http://expressjs.com/">Express</a>
- <a href="https://momentjs.com/timezone/">Moment Timezone</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />

<hr />

## Client and API Integrations

By default, all root directories within the main application (with <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/babel.config.js#L4">exceptions</a>), as well as within the `server` folders are aliased (`~`). This means you can refer to the root directories by using the ~ symbol followed by the folder name. For example, in the API (custom Express server inside `server`): `~controllers`, refers to the `server/controllers` folder; or, for example, in the main directory: `~components` refers to the `components` folder directory. This allows for rapid development when referring to reusable components or functions as it eliminates the hassle of traversing the folder tree for relative pathing!

Notes: This feature extends to new folders created within either the main or `server` directories. However, if you add a new root folder in the main directory, then you'll need to add it to the `nodemon.json` ignore folders list. Not doing so will restart the custom express server on subsequent file saves and cause a temporary loss of webpack hot-reloading.

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/issues">here</a>.

⚠️ (Status: Unresolved) - Importing a component or page that imports a `.css` or `.scss` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

⚠️ (Status: Unresolveable) - Saving files within the `server` folder causes the entire process to restart (as intended); however, this causes webpack hot loading to be broken (due to the NextJS files being recompiled upon restart). That said, NextJS will automatically rebuild the `hot-loading.json` file and hot reloading will work after a few seconds.

⚠️ (Status: Unresolveable) - Adding `test.js` files within the `pages` folder causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` file as reachable views. Instead, place a `__tests__` folder for `pages` testing into the `components` folder.
