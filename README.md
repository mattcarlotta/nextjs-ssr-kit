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

✔️ Styled-components implementation.

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
├── build
├── config
├── database
├── e2e
├── env
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
|   ├── global.d.ts
|   └── jest.d.ts
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

| `yarn <command>` | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `analyze:prod`   | Compiles `src` app and spawns webpack chunk distribution charts for production. |
| `analyze:stage`  | Compiles `src` app and spawns webpack chunk distribution charts for staging.    |
| `build`          | Compiles `src` application to a `.next/static` directory for production.        |
| `build:stage`    | Compiles `src` application to a `.next/static` directory for staging.           |
| `dev`            | Starts development server (`localhost:3000`).                                   |
| `drop:prod`      | Drops production database from Mongo.                                           |
| `drop:stage`     | Drops staging database from Mongo.                                              |
| `lint`           | Lints all `.ts`/`.tsx` files in `src`.                                          |
| `lint:styles`    | Lints all `.scss` files in `src`.                                               |
| `seed:prod`      | Seeds production database for Mongo.                                            |
| `seed:stage`     | Seeds staging database for Mongo.                                               |
| `start`          | Starts a production server at `localhost:8080` (must run `build` first).†       |
| `staging`        | Starts a staging server at `localhost:8080` (must run `build` first).           |
| `test`           | Runs `.test.tsx` files in `src` once.                                           |
| `test:cov`       | Runs `.test.tsx` files in `src` with code coverage.                             |
| `test:e2e`       | Runs cypress `.spec.js` files in `e2e` in a browser.                            |
| `test:e2erun`    | Runs cypress `.spec.js` files in `e2e` headlessly.                              |
| `test:failed`    | Runs and watches `.test.tsx` files that failed in `src`.                        |
| `test:prod`      | Compiles `src` app for production and runs `start` command after compilation.   |
| `test:stage`     | Compiles `src` app for staging and runs `staging` command after compilation.    |
| `test:watch`     | Runs and watches `.tsx` files in `src` that have changed since last commit.     |
| `test:watchall`  | Runs and watches all `.test.jsx` files in `src`.                                |
| `tsc`            | Type checks all `.ts`/`.tsx` files in `src`.                                    |

† Note: Before running this command, you must edit the [.env.production](env/.env.production#L1) file and update the `baseURL` from `http://localhost:8080/api/` to include your remote server address.

<hr />

## NextJS Configuration

<details>
<summary>Click to expand NextJS configuration</summary>
<pre><code>
- public: NextJS public assets.
- src/actions: redux actions.
- src/components: react components.
- src/constants: redux constants.
- src/pages/_app.tsx: NextJS app configuration (redux + redux saga + global stylesheet).
- src/pages/_document.tsx: NextJS document configuration for styled-components.
- src/pages/_error.tsx: NextJS fallback 404 page.
- src/reducers: redux reducers.
- src/sagas: redux sagas.
- src/store: redux store configuration.
- src/styles: custom component/page styles.
- src/types: shareable typescript types and interfaces.
- src/utils/__mocks__/mockAxios.ts: a mocked axios instance for testing.
- src/utils/setupTest/index.ts: enzyme test setup for your React components.
- src/utils/axiosConfig/index.ts: custom axios configuration.
- src/utils/parseFields/index.ts: custom functions for parsing form fields into a simple object.
- src/utils/parseResponse/index.ts: custom functions for parsing 'res' responses.
- src/global.d.ts: typescript types for jest globals.
- src/jest.d.ts: typescript types for custom toHaveStyleRule.
- .eslintignore: NextJS eslint config.
- .eslintrc: NextJS eslint ignore config.
- .stylelintrc: stylelint config.
- jest.json: jest config for NextJS.
- next.env.d.ts: types for NextJS project.
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
- src/pages/api/*: API route controllers.
</code></pre>
</details>
<br />

## Misc Configurations

<details>
<summary>Click to expand misc configurations</summary>
<pre><code>
- .github: Continous integration using Github Actions and repo issue templates.
- .next: NextJS development/production compiled source.
- e2e: cypress test suites.
- config: webpack supporting configuration files.
- logger: shareable chalk console notifications.
- .browserslistrc: browsers list config (for babel transpiling).
- .prettierc: prettier config.
- .npmrc: yarn config.
- babel.config.js: babel config.
- tsconfig.js: TS compiler options (integration with IDE)
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
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
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
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
- <a href="https://github.com/styled-components/styled-components">Styled Components</a>
</code></pre>
</details>
<br />

### API Specific

<details>
<summary>Click to expand brief overview of API packages</summary>
<pre><code>
- <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>
- <a href="https://github.com/motdotla/dotenv">DotENV</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, most directories within the root and `src` directories are [aliased](tsconfig.json#L22-L37) (`~`). This means that you can refer to root files or directories by using the `~` symbol followed by a child file or directory name (root-level `index.js` files [require their own aliases](https://github.com/zeit/next.js/issues/12743), as such this project has been set up to handle predefined directories -- you'll be responsible for any additional directories). For example, `~models`, refers to the root [models/index.js](models/index.js) file, while `~models/users` refers to the [model/user.js](models/user.js) file. This allows for rapid development when referring to root-level directories as it eliminates the hassle of specifiying relative paths (like `../../../../../../../models`) to the directory!

<hr />

## ENV Setup

By default, this project attempts to import `.env` files placed within the `env` directory according to the `process.env.NODE_ENV` variable (`development`, `staging` and `production`, ...etc). However, this has been set up to be flexible so that if you don't wish to utilize any `.env` files, then as long the following `process.env` variables are defined, then the `.env` files and/or directory can be discarded:

- `baseURL` (used [here](src/utils/axiosConfig/index.ts#L5))
- `DATABASE` (used [here](database/index.js#L5))
- `LOCALHOST` (required for development only, used [here](next.config.js#L7), [here](config/plugins.js#L21), and [here](config/plugins.js#L40))
- `PORT` (required for development only, used [here](config/plugins.js#L22) and [here](config/plugins.js#L42))

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/issues">here</a>.

### Unresolved

⚠️ Importing a component or page that imports a `.css`, `.scss` or `.sass` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

⚠️ Ideally testing against styled-components would be handled by [jest-styled-components](https://github.com/styled-components/jest-styled-components), however there's a bug where the package attempts to collect styles from `-sc` classNames. Since v5.0, `-sc` classNames don't contain styles and therefore `toHaveStyleRule` won't work unless styled-components is downgraded to v4. As a result, the package has been temporary inlined until the issue has been fixed. See <a href="https://github.com/styled-components/jest-styled-components/issues/338">issue tracker</a>.

### Unresolvable

⚠️ Attempting to import a CSS file from `node_modules` within a component may result in incorrectly ordered stylesheets. Same holds true for UI libraries that attempt to import a CSS file when a component is imported. Instead, CSS files from `node_modules` should only be imported within the [\_app.js](src/pages/_app.js) file -- either directly imported or imported within the [globals.scss](src/styles/globals.scss) file which is then directly imported into the `_app.js` file as a global stylesheet. See [Adding a Global Stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) for more information.

⚠️ Adding `.test.tsx` files within the `pages` directory causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` directory as reachable views. Instead, it's recommended to write end-to-end tests for `pages` using [cypress](https://www.npmjs.com/package/cypress).

<hr />

## Contributors

Support this boilerplate by becoming a contributor. Your github logo will show up here with a link to your profile.

<a href="https://github.com/kimberleykelly" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32412752?s=120&v=4" height="30px"><span style="margin-left: 5px">kimberleykelly</span></a>
