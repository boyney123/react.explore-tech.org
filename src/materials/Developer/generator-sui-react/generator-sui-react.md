---
path: '/materials/generator-sui-react'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'generator-sui-react'
  url: 'https://github.com/SUI-Components/generator-sui-react'
  github_url: 'https://github.com/SUI-Components/generator-sui-react'
  subscribers_count: '43'
  stargazers_count: '15'
  tags: ['']
  subtitle: 'A yeoman generator for react components'
  clone_url: 'https://github.com/SUI-Components/generator-sui-react.git'
  ssh_url: 'git@github.com:SUI-Components/generator-sui-react.git'
  pushed_at: '2016-09-13T06:27:10Z'
  updated_at: '2018-03-28T15:47:16Z'
  author:
    name: 'SUI-Components'
    avatar: 'https://avatars0.githubusercontent.com/u/13288987?v=4'
    github_url: 'https://github.com/SUI-Components'
  latestRelease:
    tag_name: '4.0.0'
    name: 'Upgrade to Babel 6'
    url: 'https://github.com/SUI-Components/generator-sui-react/releases/tag/4.0.0'
    created_at: '2015-11-11T13:57:10Z'
---
# generator-sui-react

[![NPM Version][npm-image]][npm-url] [![Code Climate](https://codeclimate.com/github/SUI-Components/generator-sui-react/badges/gpa.svg)](https://codeclimate.com/github/SUI-Components/generator-sui-react)

A yeoman generator for Schibsted User Interface (**sui**) ReactJS components. By using this generator, you can create components to work as a part of a complex application (atoms or mollecules) or stand-alone components, ready for production.. For more information about **atomic design**, read the following blog post: http://bradfrost.com/blog/post/atomic-web-design/.

## Features
The generator provides a basic structure to start developing a component, including coding standard rules, naming conventions and a unit testing suite.

* A basic structure for your component, prepared for publishing in npm or deploying to production
* Automatic installation of all npm dependencies
* Linting rules for all `js`, `jsx`, `s(c|a)ss` and `css` files
* Support for [ES2015](https://babeljs.io/docs/learn-es2015/)
* Unit testing suite
* A local development environment with webpack
* A `docs` folder to generate the component's documentation and a deployment task to create a Github page.
* A set of pre-commit rules for launching linting and tests before commiting changes in Github
* Common editor config rules

## Previous steps

The SUI Generator for React.JS components is a Yeoman generator, so make sure to have already installed Node.JS and Yeoman first:

* Install Node.JS: [nodejs.org/download](http://nodejs.org/download)
* Install Yeoman: http://yeoman.io/

You can install yeoman using npm:

```
$ npm install -g yo
```

## Installation

To install the generator, just type in your terminal:

```
$ npm install -g @schibstedspain/generator-sui-react
```
To make sure it's installed correctly, type `yo` in your terminal. A list of options should appear, including the installation of the generator:

```
~ ❯ yo
? 'Allo [your-username]! What would you like to do? (Use arrow keys)
  Run a generator
❯ @schibstedspain/sui React 
  ──────────────
  Update your generators 
  Install a generator 
  Find some help 
  Get me out of here! 
```

## Create your first React.JS component

First of all, let's create a folder for your component in the desired path with:

```
$ mkdir your-component-name
```

Once created, enter the folder and aunch the generator by typing:

```
$ cd your-component-name
$ yo @schibstedspain/sui-react
```

You will be prompted about the component name, the prefix you want to use and the Github repository url (which you should be created already), and that's it!

## Folder structure
The generator will generate the following structure:
```
├── README.md
├── docs
│   ├── index.html
│   ├── index.jsx
│   └── style.scss
├── package.json
├── src
│   ├── index.jsx
│   ├── index.scss
│   └── sui-test
│       ├── _sui-test.scss
│       └── index.jsx
├── test
│   └── sui-test-test.js
└── webpack.config.js
```

## Publishing
When you are ready to publish your component, a npm package will be generated, including the following folders: A `lib` folder with the same structure as the `src` folder, but with the `js` and `jsx` preprocessed with `babel`:
```
lib
├── index.js
├── index.scss
└── component-name
    ├── _component-name.scss
    └── index.js
```

And a `dist` folder, with the `js` and `css` bundle.
```
dist
├── index.css
└── index.js
```

## Commands allowed
* `clean:lib`: cleans the `lib` folder
* `clean:dist`: cleans the `dist` folder
* `predist`: executes the task `npm run clean:dist`
* `dist`: creates a `js` and `css` bundle using `webpack`
* `prelib`: executes the task `npm run clean:lib`
* `lib`: executes both tasks `npm run lib:scripts` and `npm run lib:styles`
* `lib:scripts`: transpiles the code in the `src` folder using `babel` and outputs the result in the `lib` folder
* `lib:styles`: just copies the `.scss` files from the `src` folder to the `lib` folder
* `prepublish`: executes both tasks `npm run lib` and `npm run dist`
* `lint`: executes both tasks `npm run lint:eslint` and `npm run lint:sass`
* `lint:eslint`: lints your javascript files using `eslint`
* `lint:sass`: lints your sass style files using `sass-lint`
* `test`: executes your tests using `mocha`
* `test:watch`: executes the task `npm run test` in watch mode, watching for changes in your source files
* `start`: executes both `npm run start:open` and `npm run start:server`
* `start:server`: launches `webpack-dev-server` in [http://localhost:8080](http://localhost:8080) with your application running
* `start:open`: opens a browser with [http://localhost:8080](http://localhost:8080)
* `predoc`: cleans your `docs/dist` folder
* `doc`: executes `npm run dist`, `npm run doc:copy` and `npm run doc:publish` tasks
* `doc:copy`: copies the files generated in the `dist` folder into your `docs` folder
* `doc:publish`: publishes your documentation in your repository's Github page
* `phoenix`: cleans your `node_modules` folder and launches `npm install` to restore all your dependencies

[npm-image]: https://img.shields.io/npm/v/@schibstedspain/generator-sui-react.svg?style=flat
[npm-url]: https://npmjs.com/@schibstedspain/generator-sui-react
