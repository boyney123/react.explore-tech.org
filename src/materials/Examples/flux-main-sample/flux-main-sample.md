---
path: '/materials/flux-main-sample'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'flux-main-sample'
  url: 'https://tiarebalbi.github.io/flux-main-sample/'
  github_url: 'https://github.com/tiarebalbi/flux-main-sample'
  subscribers_count: '1'
  stargazers_count: '3'
  tags: ['codeclimate','dependabot','docker','facebook','flowtype','flux','react','webpack']
  subtitle: 'Code Splitting with Flux and React'
  clone_url: 'https://github.com/tiarebalbi/flux-main-sample.git'
  ssh_url: 'git@github.com:tiarebalbi/flux-main-sample.git'
  pushed_at: '2018-11-12T08:32:03Z'
  updated_at: '2018-11-12T08:15:11Z'
  author:
    name: 'tiarebalbi'
    avatar: 'https://avatars1.githubusercontent.com/u/103419?v=4'
    github_url: 'https://github.com/tiarebalbi'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# flux-main-sample

[![Build Status](https://travis-ci.org/tiarebalbi/flux-main-sample.svg?branch=master)](https://travis-ci.org/tiarebalbi/flux-main-sample)
[![Test Coverage](https://lima.codeclimate.com/github/tiarebalbi/flux-main-sample/badges/coverage.svg)](https://lima.codeclimate.com/github/tiarebalbi/flux-main-sample/coverage)
[![Code Climate](https://codeclimate.com/github/tiarebalbi/flux-main-sample/badges/gpa.svg)](https://codeclimate.com/github/tiarebalbi/flux-main-sample)
[![](https://data.jsdelivr.com/v1/package/npm/@tiarebalbi/flux-main-sample/badge)](https://www.jsdelivr.com/package/npm/@tiarebalbi/flux-main-sample)
[![awesome-react](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/enaqx/awesome-react#example-apps)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
----

| Platform       | Details                                    |
| -------------- |--------------------------------------------|
| Install        | `yarn add @tiarebalbi/flux-main-sample`    |
| npm            | `@tiarebalbi/flux-main-sample`             |
| Bundle         | [bundle.run](https://bundle.run/@tiarebalbi/flux-main-sample)  |
| CDN            | [jsdelivr.com](https://www.jsdelivr.com/package/npm/@tiarebalbi/flux-main-sample)  |


## External Components

| Component            | Version                                                                           |
| -------------------- |---------------------------------------------------------------------------------- |
| [flux-module-reports](https://github.com/tiarebalbi/flux-module-reports)  | ![npm (scoped)](https://img.shields.io/npm/v/@tiarebalbi/flux-module-reports.svg) |

## Why do I want this?

I want split things! No more monolithic web applications... I will try to keep it short as I totally agree with React's definitation. 

>Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.
>
> To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
>
> Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

### Resources
* https://reactjs.org/docs/code-splitting.html
* https://webpack.js.org/guides/code-splitting/
* https://github.com/jamiebuilds/react-loadable#------------guide

## What do I need to get started?

- [Node](https://nodejs.org/en/download/) (version 8.10.0 or later)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## What's in the box?

- [Flowtype](https://flowtype.org/) Type checker
- [React](https://facebook.github.io/react/) User interface components
- [React Router](https://github.com/ReactTraining/react-router) Declarative routing for React
- [React Loadable](https://github.com/jamiebuilds/react-loadable) A higher order component for loading components with promises.
- [Flux](http://facebook.github.io/flux/) Application Architecture For Building User Interfaces
- [Babel](https://babeljs.io/) JavaScript transpiler
- [ESLint](http://eslint.org/) JavaScript Linter
- [Prettier](https://github.com/prettier/prettier) Code formatter
- [Webpack](https://webpack.js.org/) Module bundler
- [Jest](https://facebook.github.io/jest/) Testing solution

## How do I use this?

You can find our documentation [here](./docs/README.md).

## Usage

### Install dependencies

Install the project dependencies using Yarn.

```bash
yarn
```

### Development server

You can start the development server with the `start` script.

```bash
yarn start
```

### Distribution build

You can compile the distribution build with the `build` script.

```bash
yarn build
```
## Test

### Test suite

You can run the test suite with the `test` script.

```bash
yarn test
```

## License

[Apache-2](LICENSE)

# Credits
On this project I'm using the [digiaonline/react-boilerplate](https://github.com/digiaonline/react-boilerplate)
boilerplate with some changes to replace MobX to Facebook Flux.
