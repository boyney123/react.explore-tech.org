---
path: '/materials/react-boilerplate'
title: 'react-boilerplate'
url: 'https://github.com/digiaonline/react-boilerplate'
github_url: 'https://github.com/digiaonline/react-boilerplate'
author:
  name: 'digiaonline'
  avatar: 'https://avatars3.githubusercontent.com/u/2654995?v=4'
  github_url: 'https://github.com/digiaonline'
subscribers_count: '35'
stargazers_count: '82'
img: './screenshot.png'
tags: ['babel','boilerplate','digia','flowtype','jest','nord-software','postcss','prettier','react','redux','webpack','yarn']
subtitle: 'Boilerplate for our React applications'
latestRelease:
  tag_name: '3.0.0'
  name: 'Version 3'
  url: 'https://github.com/digiaonline/react-boilerplate/releases/tag/3.0.0'
  created_at: '2017-09-02T09:44:48Z'
---

![alt text](screenshot.png)

# React Boilerplate

[![Build Status](https://travis-ci.org/digiaonline/react-boilerplate.svg?branch=master)](https://travis-ci.org/digiaonline/react-boilerplate)
[![Test Coverage](https://lima.codeclimate.com/github/digiaonline/react-boilerplate/badges/coverage.svg)](https://lima.codeclimate.com/github/digiaonline/react-boilerplate/coverage)
[![Code Climate](https://codeclimate.com/github/digiaonline/react-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/digiaonline/react-boilerplate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A [Digia](https://github.com/digiaonline/) project.

## Why do I want this?

As you probably know, there are numerous boilerplates available for [React](https://facebook.github.io/react/), so you might be wondering why you would want to use ours. Most of the boilerplate projects come with a lot of code that you rarely need. Our boilerplate was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and provides you with a great starting point for any React project with as few lines of code as possible, especially if you want to use [Flowtype](https://flowtype.org/).

## What do I need to get started?

- [Node](https://nodejs.org/en/download/) (version 6 or later)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## What's in the box?

- [Flowtype](https://flowtype.org/) Type checker
- [React](https://facebook.github.io/react/) User interface components
- [MobX](https://mobx.js.org/) Simple, scalable state management
- [Lodash](https://lodash.com/) Utility library
- [Babel](https://babeljs.io/) JavaScript transpiler
- [ESLint](http://eslint.org/) JavaScript Linter
- [Prettier](https://github.com/prettier/prettier) Code formatter
- [PostCSS](http://postcss.org/) CSS transformer
- [Stylelint](https://stylelint.io/) CSS Linter
- [Webpack](https://webpack.js.org/) Module bundler
- [Jest](https://facebook.github.io/jest/) Testing solution

## How do I use this?

You can find our documentation [here](./docs/README.md).

## Usage

### Create project

Install [create-project](https://www.npmjs.com/package/create-project) and create your project.

```bash
yarn global add create-project
create-project my-project digiaonline/react-boilerplate && cd my-project
```

### Install dependencies

Install the project dependencies using Yarn.

```bash
yarn
```

### Create the environment

Create your environment by copying the example environment.

```bash
cp .env.example .env
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

[MIT](LICENSE)

        