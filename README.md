![bnej5es.png](https://i.imgur.com/bnej5es.png)

<img src="https://img.shields.io/github/package-json/v/mattcarlotta/nextjs-ssr-kit?style=for-the-badge"></img> [![Codecov](https://img.shields.io/codecov/c/github/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://codecov.io/gh/mattcarlotta/nextjs-ssr-kit) [![Open Issues](https://img.shields.io/github/issues-raw/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/issues) [![Dependencies](https://img.shields.io/david/mattcarlotta/nextjs-ssr-kit.svg?style=for-the-badge)](https://david-dm.org/mattcarlotta/nextjs-ssr-kit) [![License](https://img.shields.io/github/license/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/LICENSE)

## Table of contents

[Pre-Configured Packages](#pre-configured-packages)

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Example API](#example-api)

[NextJS Configuration](#nextjs-configuration)

[API Configuration](#api-configuration)

[Misc Configurations](#misc-configurations)

[Packages Incorporated](#packages-incorporated)

[NextJS and API Integrations](#nextjs-and-api-integrations)

[ENV Setup](#env-setup)

[Known Issues](#known-issues)

## Pre-Configured Packages

✔️ Redux + Redux + Redux Saga implementation.

✔️ Styled-components implementation.

✔️ CSS/SASS/SCSS module and global imports (includes `node_module` imports; see [Known Issues](#known-issues) regarding import hierarchy).

✔️ Eslint JS/JSX files.

✔️ Stylelint SCSS files.

✔️ Runs Eslint, Jest, and Stylelint before committing.

✔️ Pre-configured interactive API.

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .next
├── build
├── config
├── database
├── e2e
├── env
├── models
├── public
├── src
|   ├── actions
|   ├── components
|   ├── constants
|   ├── images
|   ├── middlewares
|   ├── pages
|   ├── reducers
|   ├── sagas
|   ├── store
|   ├── styles
|   └── utils
|
├── .browserslistrc
├── .eslintignore
├── .eslintrc
├── .npmrc
├── .prettierc
├── .stylelintrc
├── babel.config.js
├── jest.json
├── jsconfig.json
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

3 - Run `yarn dev` to run a development server.

<hr />

## Commands

| `yarn <command>` | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `analyze:prod`   | Compiles `src` app and spawns webpack chunk distribution charts for production. |
| `analyze:stage`  | Compiles `src` app and spawns webpack chunk distribution charts for staging.    |
| `build`          | Compiles `src` application to a `.next/static` folder for production.           |
| `build:stage`    | Compiles `src` application to a `.next/static` folder for staging.              |
| `dev`            | Starts development server (`localhost:3000`).                                   |
| `drop:prod`      | Drops production database from Mongo.                                           |
| `drop:stage`     | Drops staging database from Mongo.                                              |
| `lint`           | Lints all `.js` files in `src`.                                                 |
| `lint:styles`    | Lints all `.scss` files in `src`.                                               |
| `seed:prod`      | Seeds production database for Mongo.                                            |
| `seed:stage`     | Seeds staging database for Mongo.                                               |
| `start`          | Starts a production server at `localhost:8080` (must run `build` first).†       |
| `staging`        | Starts a staging server at `localhost:8080` (must run `build` first).           |
| `test`           | Runs `.test.js` files in `src` once.                                            |
| `test:cov`       | Runs `.test.js` files in `src` with code coverage.                              |
| `test:e2e`       | Runs cypress `.spec.js` files in `e2e` in a browser.                            |
| `test:e2erun`    | Runs cypress `.spec.js` files in `e2e` headlessly.                              |
| `test:failed`    | Runs and watches `.test.js` files that failed in `src`.                         |
| `test:prod`      | Compiles `src` app for production and runs `start` command after compilation.   |
| `test:stage`     | Compiles `src` app for staging and runs `staging` command after compilation.    |
| `test:watch`     | Runs and watches `.js` files in `src` that have changed since last commit.      |
| `test:watchall`  | Runs and watches all `.test.js` files in `src`.                                 |

† Note: Before running this command, you must edit the <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/env/.env.production#L2">env/.env.production</a> file and update the `baseURL` from `http://localhost:8080/api/` to include your remote server address.

<hr />

## Example API

Provided in this boilerplate is an example of how to integrate a RESTFUL API (utilizing MongoDB).

If you wish to utilize the API:

- <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition">Install MongoDB</a> and make sure the service is up and running.
- Navigate to `http://localhost:3000/users` to interact with the API from the NextJS-side.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand NextJS configuration</summary>
<pre><code>
- public: NextJS public folder.
- src/actions: redux actions.
- src/components: react components.
- src/constants: redux constants.
- src/images: NextJS app images.
- src/pages/_app.js: NextJS app configuration (redux + redux saga + global stylesheet).
- src/pages/_document.js: NextJS document configuration for styled-components.
- src/pages/_error.js: NextJS fallback 404 page.
- src/reducers: redux reducers.
- src/sagas: redux sagas.
- src/store: redux store configuration.
- src/styles: custom component/page styles.
- src/utils/__mocks__/mockAxios.js: a mocked axios instance for testing.
- src/utils/setupTest/index.js: enzyme test setup for your React components.
- src/utils/axiosConfig/index.js: custom axios configuration.
- src/utils/parseResponse/index.js: custom saga functions functions.
- .eslintignore: NextJS eslint config.
- .eslintrc: NextJS eslint ignore config.
- .stylelintrc: stylelint config.
- jest.json: jest config for NextJS.
- next.config.js: custom NextJS webpack config.
</code></pre>
</details>
<br />

## API Configuration

<details>
<summary>Click to expand API configuration</summary>
<pre><code>
- database: Mongo connection configuration.
- models: Mongo models for Mongoose.
- src/middlewares: API middlewares.
- src/pages/api/*: API route controllers.
</code></pre>
</details>
<br />

## Misc Configurations

<details>
<summary>Click to expand misc configurations</summary>
<pre><code>
- .next: NextJS development/production compiled source.
- e2e: cypress test suites.
- config: webpack supporting configuration files.
- .browserslistrc: browsers list config (for babel transpiling).
- .prettierc: prettier config.
- .npmrc: yarn config.
- babel.config.js: babel config.
- jsconfig.js: compiler options (aliases)
- nodemon.json: nodemon configuration for server restarts.
</code></pre>
</details>
<br />

<hr />

## Packages Incorporated

Click [here](package.json) to see latest versions.

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
- <a href="https://github.com/zeit/next.js">NextJS</a>
- <a href="https://github.com/zeit/next-plugins">NextJS CSS</a>
- <a href="https://github.com/zeit/next-plugins">NextJS SASS</a>
- <a href="https://github.com/kirill-konshin/next-redux-wrapper">NextJS Redux Wrapper</a> 
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
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://momentjs.com/timezone/">Moment Timezone</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, most directories within the root and `src` folders are [aliased](jsconfig.json) (`~`). This means that you can refer to their child files or child directories by using the `~` symbol followed by the child name or folder name (root-level `index.js` files [require their own aliases](https://github.com/zeit/next.js/issues/12743), as such this project has been set up to handle predefined directories -- you'll be responsible for any additional directories). For example, `~models`, refers to the root [models/index.js](models/index.js) file, while `~models/users` refers to the [model/user.js](models/user.js) file. This allows for rapid development when referring to root-level folders as it eliminates the hassle of specifiying relative paths (like `../../../../../../../models`) to the folder from anywhere within the project!

<hr />

## ENV Setup

By default, this project attempts to import `.env` files placed within the `env` directory according to the `process.env.NODE_ENV` variable (`development`, `staging` and `production`, ...etc). However, this has been set up to be flexible so that if you don't wish to utilize any `.env` files, then as long the following `process.env` variables are defined, then the `env` directory can be discarded:

- `baseURL` (used [here](src/utils/axiosConfig/index.js))
- `DATABASE` (used [here](database/index.js))
- `LOCALHOST` (required for develpment only, used [here](next.config.js) and [here](config/plugins.js))
- `PORT` (required for develpment only, used [here](config/plugins.js))

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/issues">here</a>.

⚠️ (Status: Unresolved) - Importing a component or page that imports a `.css`, `.scss` or `.sass` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

⚠️ (Status: Unresolveable) - Attempting to import a CSS file from `node_modules` within a component may result in incorrectly ordered stylesheets. Same holds true for UI libraries that attempt to import a CSS file when a component is imported. Instead, CSS files from `node_modules` should only be imported within the [\_app.js](src/pages/_app.js) file -- either directly imported or imported within the [globals.scss](src/styles/globals.scss) file which is then directly imported into the `_app.js` file. See [Adding a Global Stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet).

⚠️ (Status: Unresolveable) - Adding `.test.js` files within the `pages` folder causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` file as reachable views. Instead, it's recommended to write end-to-end tests for `pages` using [cypress](https://www.npmjs.com/package/cypress).
