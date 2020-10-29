![logo.png](https://i.imgur.com/xd1mL6K.png)

<img src="https://img.shields.io/github/package-json/v/mattcarlotta/nextjs-ssr-kit?style=for-the-badge"></img> [![Codecov](https://img.shields.io/codecov/c/github/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://codecov.io/gh/mattcarlotta/nextjs-ssr-kit) [![Open Issues](https://img.shields.io/github/issues-raw/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/issues) [![Dependencies](https://img.shields.io/david/mattcarlotta/nextjs-ssr-kit.svg?style=for-the-badge)](https://david-dm.org/mattcarlotta/nextjs-ssr-kit) [![License](https://img.shields.io/github/license/mattcarlotta/nextjs-ssr-kit?style=for-the-badge)](https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/LICENSE)

## Table of contents

[Pre-Configured Packages](#pre-configured-packages)

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[NextJS Configuration](#nextjs-configuration)

[API Configuration](#api-configuration)

[Misc Configurations](#misc-configurations)

[Packages Incorporated](#packages-incorporated)

[NextJS and API Integrations](#nextjs-and-api-integrations)

[ENV Setup](#env-setup)

[Known Issues](#known-issues)

[Contributers](#contributors)

## Pre-Configured Packages

✔️ Typescript implementation.

✔️ Pre-configured Github Actions for CI.

✔️ Redux + Redux + Redux Saga implementation.

✔️ Emotion implementation.

✔️ Eslint JS/JSX files.

✔️ Stylelint SCSS files.

✔️ Runs Eslint, Jest, and Stylelint before committing.

✔️ Pre-configured Cypress for E2E testing.

✔️ Pre-configured interactive API.

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .github
├── .next
├── api
|   ├── controllers
|   ├── database
|   ├── middlewares
|   ├── models
|   ├── routes
|   ├── test
|   ├── .eslintignore
|   ├── .eslintrc
|   ├── jest.json
|   ├── nodemon.json
|   ├── prod-paths.json
|   ├── server.ts
|   ├── tsconfig.json
|   └── tsconfig.prod.json
|
├── build
├── config
├── database
├── e2e
├── logger
├── models
├── public
├── src
|   ├── actions
|   ├── components
|   ├── constants
|   ├── pages
|   ├── reducers
|   ├── sagas
|   ├── store
|   ├── styles
|   └── global.d.ts
|
├── .browserslistrc
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .npmrc
├── .prettierc
├── .stylelintrc
├── babel.config.js
├── jest.json
├── next.env.d.ts
├── next.config.json
└── tsconfig.json
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

Provided in this boilerplate is an example of how to integrate a RESTful API (utilizing MongoDB).

In order to interact with the API, you'll need to:

- <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition">Install MongoDB</a> and make sure the service is up and running.
- While the development server is running, open your browser and navigate to <a href="http://localhost:3000/users">http://localhost:3000/users</a>.

<hr />

## Commands

| `yarn <command>` | Description                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `analyze`        | Compiles `src` app to `.next/static` and displays chunk distribution charts for production.      |
| `build`          | Compiles `src` app to `.next/static` and `api` to `dist` for production. †                       |
| `build:staging`  | Compiles `src` app to `.next/static` and `api` to `dist` for staging.                            |
| `dev`            | Starts development servers (`localhost:3000` for app and `localhost:5000` for api).              |
| `lint`           | Lints all `.ts`/`.tsx` files in `src`.                                                           |
| `lint:api`       | Lints all `.ts` files in `api`.                                                                  |
| `start`          | Starts production servers (must run `build` first).                                              |
| `start:staging`  | Starts staging servers (must run `build:staging` first).                                         |
| `test`           | Runs `.test.tsx` files in `src` once.                                                            |
| `test:api`       | Runs `.spec.ts` files in `api` once.                                                             |
| `test:apicov`    | Runs `.spec.ts` files in `api` with code coverage.                                               |
| `test:apiwatch`  | Runs and watches all `.spec.ts` files in `api` for changes.                                      |
| `test:cov`       | Runs `.test.tsx` files in `src` with code coverage.                                              |
| `test:e2e`       | Runs cypress `.spec.js` files in `e2e` in a browser (run `build:staging`/`start:staging` first). |
| `test:e2erun`    | Runs cypress `.spec.js` files in `e2e` headlessly.                                               |
| `test:watch`     | Runs and watches `.tsx` files in `src` that have changed since last commit.                      |
| `test:watchall`  | Runs and watches all `.test.jsx` files in `src` for changes.                                     |

† Note: Before running this command, you must edit the [.env.production](.env.production#) file and update the `baseURL` from `http://localhost:5000/api/` to include your remote API server host and update `CLIENT` from `http://localhost:3000` to include your remote server application host.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand NextJS configuration</summary>
<pre><code>
- .next: NextJS development/production compiled source.
- public: NextJS public assets.
- src/actions: Redux actions.
- src/components: React components.
- src/constants: Redux constants.
- src/pages/_app.tsx: NextJS app configuration (redux + redux saga + global stylesheet).
- src/pages/_document.tsx: NextJS document configuration for emotion components.
- src/pages/_error.tsx: NextJS fallback 404 page.
- src/reducers: Redux reducers.
- src/sagas: Redux sagas.
- src/store: Redux store configuration.
- src/styles: Custom component/page styles.
- src/types: Shareable typescript types and interfaces.
- src/utils/__mocks__/mockAxios.ts: A mocked axios instance for testing.
- src/utils/setupTest/index.ts: Enzyme test setup for your React components.
- src/utils/axiosConfig/index.ts: Custom axios configuration.
- src/utils/parseFields/index.ts: Custom functions for parsing form fields into a simple object.
- src/utils/parseResponse/index.ts: Custom functions for parsing 'res' responses.
- src/global.d.ts: typescript types for jest globals.
- .eslintignore: NextJS eslint config for NextJS.
- .eslintrc: NextJS eslint ignore config for NextJS.
- .stylelintrc: Stylelint config for NextJS.
- babel.config.js: Babel config for NextJS.
- jest.json: jest Config for NextJS.
- next.env.d.ts: Types for NextJS.
- next.config.js: Custom NextJS webpack config.
- tsconfig.json: TS compiler options for Next (integration with IDE)
</code></pre>
</details>
<br />

## API Configuration

<details>
<summary>Click to expand API configuration</summary>
<pre><code>
- api/controllers: Express route controllers.
- api/database: Mongo connection configuration.
- api/middlewares: Express middlewares.
- api/models: Mongoose models for Mongo.
- api/routes: Express routes.
- api/test/utils: Test setup utils.
- api/.eslintignore: API eslint config.
- api/.eslintrc: API eslint ignore config.
- api/jest.json: jest config for API.
- api/nodemon.json: Development options for reloading the API process on save.
- api/prod-path.js: Resolving aliased modules for API in production.
- api/server.ts: Express server setup.
- api/tsconfig.json: TS compiler options for the API (integration with IDE)
- api/tsconfig.prod.json: TS compiler options for building the API (excludes tests)
- build: API compiled source.
</code></pre>
</details>
<br />

## Misc Configurations

<details>
<summary>Click to expand misc configurations</summary>
<pre><code>
- .github: Continous integration using Github Actions and repo issue templates.
- e2e: Cypress end-to-end test suites.
- config: Webpack supporting configuration files.
- logger: Shareable chalk console notifications.
- .browserslistrc: Browsers list config (for babel transpiling).
- .prettierc: Prettier config.
- .npmrc: Yarn config.
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
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/cypress-io/cypress">Cypress</a>
- <a href="https://github.com/emotion-js/emotion">Emotion</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="https://github.com/typicode/husky">Husky</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/zeit/next.js">NextJS</a>
- <a href="https://github.com/kirill-konshin/next-redux-wrapper">NextJS Redux Wrapper</a> 
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/fkhadra/react-toastify">React Toastify</a>
- <a href="https://github.com/reduxjs/redux">Redux</a>
- <a href="https://github.com/zalmoxisus/redux-devtools-extension">Redux DevTools Extension</a>
- <a href="https://redux-saga.js.org/">Redux Saga</a>
- <a href="https://github.com/sass/dart-sassr">Sass</a>
- <a href="https://github.com/mattcarlotta/snackables">Snackables</a>
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
</code></pre>
</details>
<br />

### API Specific

<details>
<summary>Click to expand brief overview of API packages</summary>
<pre><code>
- <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>
- <a href="https://github.com/expressjs/body-parser">Body Parser</a>
- <a href="https://github.com/expressjs/cors">CORS</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/mattcarlotta/snackables">Snackables</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, most directories within the root and `src` directories are [aliased](tsconfig.json#L22-L37) (`~`). This means that you can refer to root files or directories by using the `~` symbol followed by a child file or directory name (root-level `index.js` files [require their own aliases](https://github.com/zeit/next.js/issues/12743), as such this project has been set up to handle predefined directories -- you'll be responsible for any additional directories). For example, `~models`, refers to the root [models/index.js](api/models/index.js) file, while `~models/users` refers to the [model/user.js](api/models/user.js) file. This allows for rapid development when referring to root-level directories as it eliminates the hassle of specifiying relative paths (like `../../../../../../../models`) to the directory!

<hr />

## ENV Setup

By default, this project attempts to import `.env` files placed within the `root` directory according to the `process.env.ENV_LOAD` variable (`development`, `staging` and `production`, ...etc; see snackables [documentation](https://github.com/mattcarlotta/snackables/blob/main/README.md) for more info). However, this has been set up to be flexible so that if you don't wish to utilize any `.env` files, then as long the following `process.env` variables are defined, then the `.env` files and/or directory can be discarded:

- `APIPORT` (required and used [here](api/server.ts#L20))
- `baseURL` (required and used [here](src/utils/axiosConfig/index.ts#L8))
- `CLIENT` (required and used [here](next.config.js#L8), [here](config/plugins.js#L21), [here](config/plugins.js#L40) and [here](api/middlewares/index.ts#L34))
- `DATABASE` (required and used [here](api/database/index.ts))
- `PORT` (required and used [here](config/plugins.js#L22) and [here](config/plugins.js#L42))

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/issues">here</a>.

### Unresolved

⚠️ Importing a component or page that imports a `.css`, `.scss` or `.sass` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

### Unresolvable

⚠️ Attempting to import a CSS file from `node_modules` within a component may result in incorrectly ordered stylesheets. Same holds true for UI libraries that attempt to import a CSS file when a component is imported. Instead, CSS files from `node_modules` should only be imported within the [\_app.js](src/pages/_app.js) file -- either directly imported or imported within the [globals.scss](src/styles/globals.scss) file which is then directly imported into the `_app.js` file as a global stylesheet. See [Adding a Global Stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) for more information.

⚠️ Adding `.test.tsx` files within the `pages` directory causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` directory as reachable views. Instead, it's recommended to write end-to-end tests for `pages` using [cypress](https://www.npmjs.com/package/cypress).

<hr />

## Contributors

Support this boilerplate by becoming a contributor. Your github logo will show up here with a link to your profile.

<a href="https://github.com/kimberleykelly" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32412752?s=120&v=4" height="30px"><span style="margin-left: 5px">kimberleykelly</span></a>
