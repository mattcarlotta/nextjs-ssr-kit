![bnej5es.png](https://i.imgur.com/bnej5es.png)

<img src="https://img.shields.io/github/package-json/v/mattcarlotta/nextjs-ssr-kit?style=for-the-badge"></img> [![Codecov](https://img.shields.io/codecov/c/github/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://codecov.io/gh/mattcarlotta/nextjs-ssr-kit) [![Open Issues](https://img.shields.io/github/issues-raw/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/issues) [![Dependencies](https://img.shields.io/david/mattcarlotta/nextjs-ssr-kit.svg?style=for-the-badge)](https://david-dm.org/mattcarlotta/nextjs-ssr-kit) [![License](https://img.shields.io/github/license/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/LICENSE)

## Table of contents

[Pre-Configured Packages](#pre-configured-packages)

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Example API](#example-api)

[NextJS Configuration](#NextJS-configuration)

[API Configuration](#api-configuration)

[Packages Incorporated](#packages-incorporated)

[NextJS and API Integrations](#NextJS-and-api-integrations)

[Known Issues](#known-issues)

## Pre-Configured Packages

✔️ ES6 import/export syntax for the NextJS and API apps.

✔️ Redux + Redux + Redux Saga implementation.

✔️ Styled-components implementation.

✔️ CSS/SASS/SCSS module and global imports.

✔️ Eslint JS/JSX files.

✔️ Stylelint SCSS files.

✔️ Runs Eslint, Jest, and Stylelint before committing.

✔️ Custom Express server with interactive API.

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .next
├── actions
├── build
├── components
├── config
├── env
├── images
├── pages
├── paths
├── public
├── reducers
├── sagas
├── scripts
├── server
|   ├── controllers
|   ├── database
|   ├── helpers
|   ├── middlewares
|   ├── models
|   ├── routes
|   ├── .eslintignore
|   ├── .eslintrc
|   ├── app.js
|   └── jest.json
├── styles
├── types
├── utils
├── .browserslistrc
├── .eslintignore
├── .eslintrc
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

3 - While at the application's root directory, start a dev server by running `yarn dev`.

<hr />

## Commands

| `yarn <command>`     | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `analyze`            | Compiles NextJS/API apps and spawns webpack chunk distribution charts.         |
| `build`              | Compiles NextJS application to a `.next/static` folder.                        |
| `compile`            | Compiles API application to a `build` folder.                                  |
| `checkbuild`         | Checks to see if the `.next/static` folder is ES5 compliant (for IE11).        |
| `dev`                | Starts development server (`localhost:5000`).                                  |
| `lint`               | Lints all `.js` files.                                                         |
| `lint:back`          | Lints all of API's `.js` files.                                                |
| `lint:front`         | Lints all of NextJS's `.js` files.                                             |
| `lint:styles`        | Lints all of NextJS's `.scss` files.                                           |
| `production`         | Executes `build` and `compile` commands in sequence.                           |
| `start`              | Starts a production server at `localhost:8080` (must run `production` first).† |
| `test`               | Runs `.test.js` files for the NextJS and API.                                  |
| `test:front`         | Runs `.test.js` files for the NextJS only.                                     |
| `test:frontcov`      | Runs `.test.js` files for the NextJS with code coverage.                       |
| `test:frontwatch`    | Runs and watches changed `.test.js` files for the NextJS.                      |
| `test:frontwatchall` | Runs and watches all `.test.js` files for the NextJS.                          |
| `test:back`          | Runs `.test.js` files for the API only.                                        |
| `test:backcov`       | Runs `.test.js` files for the API with code coverage.                          |
| `test:backwatch`     | Runs and watches `.test.js` files for the API.                                 |

† Note: Before running this command, you must edit the <a href="https://github.com/mattcarlotta/NextJS-ssr-kit/blob/master/env/.env.production#L4">env/.env.production</a> file and update the `baseURL` from `http://localhost:8080/api/` to include your remote server address.

<hr />

## Example API

Provided in this boilerplate is an example of how to integrate a RESTFUL API (utilizing MongoDB).

If you wish to utilize the API:

- <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition">Install MongoDB</a> and make sure the service is up and running.
- Navigate to `http://localhost:5000/users` to interact with the API from the NextJS-side.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand NextJS configuration</summary>
<pre><code>
- actions: redux actions.
- components: react components.
- config: NextJS webpack supporting configuration files.
- env: environment variables.
- pages/_app.js: NextJS app configuration (redux + redux saga + global stylesheet).
- pages/_document.js: NextJS document configuration for styled-components.
- pages/_error.js: NextJS fallback 404 page.
- paths: webpack paths.
- reducers: redux reducers.
- sagas: redux sagas.
- scripts: custom scripts to handle building and compiling production assets.
- server: custom Express API configuration.
- store: redux store configuration.
- styles: custom component/page styles.
- types: redux constants.
- utils/__mocks__/mockAxios.js: a mocked axios instance for testing.
- utils/setupTest/index.js: enzyme test setup for your React components.
- utils/axiosConfig/index.js: custom axios configuration.
- utils/parseResponse/index.js: custom saga functions functions.
- .browserslistrc: browsers list config (for babel transpiling).
- .prettierc: prettier config.
- .eslintignore: NextJS eslint config.
- .eslintrc: NextJS eslint ignore config.
- babel.config.js: babel config.
- jest.json: jest config for NextJS.
- next.config.js: NextJS webpack config (added support for CSS and Image imports).
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
- server/.eslintignore: API eslint config.
- server/.eslintrc: API eslint ignore config.
- server/app.js: API initialization configuration (using babel-node for ES6 import/export syntax)
- server/jest.json: API jest config.
</code></pre>
</details>
<br />

<hr />

## Packages Incorporated

Click <a href="https://github.com/mattcarlotta/NextJS-ssr-kit/blob/master/package.json">here</a> to see latest versions.

### NextJS Specfic

<details>
<summary>Click to expand brief overview of NextJS packages</summary>
<pre><code>
- <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> 
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/typicode/husky">Husky</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/lodash/lodash">Lodash</a>
- <a href="https://github.com/zeit/next.js">NextJS</a>
- <a href="https://github.com/zeit/next-plugins">NextJS CSS</a>
- <a href="https://github.com/zeit/next-plugins">NextJS SASS</a>
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
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
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
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://expressjs.com/">Express</a>
- <a href="https://momentjs.com/timezone/">Moment Timezone</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, all root directories within the main application (with <a href="https://github.com/mattcarlotta/NextJS-ssr-kit/blob/master/babel.config.js#L4">exceptions</a>), as well as within the `server` folders are aliased (`~`). This means you can refer to the root directories by using the ~ symbol followed by the folder name. For example, in the API (custom Express server inside `server`): `~controllers`, refers to the `server/controllers` folder; or, for example, in the main directory: `~components` refers to the `components` folder directory. This allows for rapid development when referring to reusable components or functions as it eliminates the hassle of traversing the folder tree for relative pathing!

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/NextJS-ssr-kit/issues">here</a>.

⚠️ (Status: Unresolved) - Importing a component or page that imports a `.css`, `.scss` or `.sass` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

⚠️ (Status: Unresolveable) - Saving files within the `server` folder or `next.config.js` file causes the entire process to restart (as intended); however, this causes webpack hot loading to be broken (due to the NextJS files being recompiled upon restart). That said, NextJS will automatically rebuild the `hot-loading.json` file and hot reloading will work after a few seconds.

⚠️ (Status: Unresolveable) - Adding `test.js` files within the `pages` folder causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` file as reachable views. Instead, a workaround is to place a `__tests__` folder for `pages` at the root of the `components` folder.
