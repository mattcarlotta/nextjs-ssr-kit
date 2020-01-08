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

[Known Issues](#known-issues)

## Pre-Configured Packages

✔️ Redux + Redux + Redux Saga implementation.

✔️ Styled-components implementation.

✔️ CSS/SASS/SCSS module and global imports.

✔️ Eslint JS/JSX files.

✔️ Stylelint SCSS files.

✔️ Runs Eslint, Jest, and Stylelint before committing.

✔️ Pre-configured interactive API.

Want to use a custom Express server? Checkout the <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/tree/express">express</a> branch.

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── .next
├── build
├── config
├── database
├── env
├── middlewares
├── models
├── public
├── src
|   ├── actions
|   ├── components
|   ├── images
|   ├── pages
|   ├── reducers
|   ├── sagas
|   ├── store
|   ├── styles
|   ├── types
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
├── next.config.json
└── nodemon.json
</code></pre>
</details>
<br />

<hr />

## Installation

1 - Clone the repository.

```
git clone --single-branch --branch master git@github.com:mattcarlotta/nextjs-ssr-kit.git
```

2 - Run `yarn install` to install dependencies.

3 - While at the application's root directory, start a dev server by running `yarn dev`.

<hr />

## Commands

| `yarn <command>` | Description                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| `analyze`        | Compiles `src` app and spawns webpack chunk distribution charts.          |
| `build`          | Compiles `src` application to a `.next/static` folder.                    |
| `checkbuild`     | Checks to see if the `.next/static` folder is ES5 compliant (for IE11).   |
| `dev`            | Starts development server (`localhost:3000`).                             |
| `lint`           | Lints all `.js` files in `src`.                                           |
| `lint:styles`    | Lints all `.scss` files in `src`.                                         |
| `start`          | Starts a production server at `localhost:8080` (must run `build` first).† |
| `test`           | Runs `.test.js` files for `src` only.                                     |
| `test:cov`       | Runs `.test.js` files for `src` with code coverage.                       |
| `test:watch`     | Runs and watches any changed `.js` files in `src`.                        |
| `test:watchall`  | Runs and watches all `.test.js` files in `src`.                           |

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
- src/images: NextJS app images.
- src/pages/_app.js: NextJS app configuration (redux + redux saga + global stylesheet).
- src/pages/_document.js: NextJS document configuration for styled-components.
- src/pages/_error.js: NextJS fallback 404 page.
- src/reducers: redux reducers.
- src/sagas: redux sagas.
- src/store: redux store configuration.
- src/styles: custom component/page styles.
- src/types: redux constants.
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
- middlewares: API middlewares.
- models: Mongo models for Mongoose.
- src/pages/api: API route controllers.
</code></pre>
</details>
<br />

## Misc Configurations

<details>
<summary>Click to expand misc configurations</summary>
<pre><code>
- .next: NextJS (src) compiled source.
- config: webpack supporting configuration files.
- .browserslistrc: browsers list config (for babel transpiling).
- .prettierc: prettier config.
- .npmrc: yarn config.
- babel.config.js: babel config.
- nodemon.json: nodemon configuration for server restarts.
</code></pre>
</details>
<br />

<hr />

## Packages Incorporated

Click <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/package.json">here</a> to see latest versions.

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
- <a href="https://momentjs.com/timezone/">Moment Timezone</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />

<hr />

## NextJS and API Integrations

By default, all directories within the root and `src` folders (with <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/blob/master/babel.config.js#L4">exceptions</a>) are aliased (`~`). This means you can refer to their child root directories by using the ~ symbol followed by the child folder name. For example, `~middlewares`, refers to the root `middlewares` folder; or, for example, in the `src` directory: `~components` refers to the `src/components` folder directory. This allows for rapid development when referring to reusable components or functions as it eliminates the hassle of traversing the folder tree for relative pathing!

<hr />

## Known Issues

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/nextjs-ssr-kit/issues">here</a>.

⚠️ (Status: Unresolved) - Importing a component or page that imports a `.css`, `.scss` or `.sass` file breaks `next/link` components. See <a href="https://github.com/zeit/next-plugins/issues/282">issue tracker</a>.

⚠️ (Status: Unresolveable) - Adding `test.js` files within the `pages` folder causes NextJS to fail upon production compilation. Unfortunately, NextJS handles all files and folders within the `pages` file as reachable views. Instead, a workaround is to place a `__tests__` folder for `pages` at the root of the `components` folder.
