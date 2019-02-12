---
path: '/materials/react-babel-webpack-starter-app'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-babel-webpack-starter-app'
  url: 'https://github.com/arcseldon/react-babel-webpack-starter-app'
  github_url: 'https://github.com/arcseldon/react-babel-webpack-starter-app'
  subscribers_count: '6'
  stargazers_count: '52'
  tags: ['']
  subtitle: 'Starter application that uses the following technologies:  * React * React Router * Flux * Node * Webpack * Bootstrap'
  clone_url: 'https://github.com/arcseldon/react-babel-webpack-starter-app.git'
  ssh_url: 'git@github.com:arcseldon/react-babel-webpack-starter-app.git'
  pushed_at: '2018-05-16T09:01:22Z'
  updated_at: '2018-12-26T08:22:39Z'
  author:
    name: 'arcseldon'
    avatar: 'https://avatars1.githubusercontent.com/u/2599332?v=4'
    github_url: 'https://github.com/arcseldon'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# react-babel-webpack
React Babel Webpack Demo App

This is a simple [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application featuring a basic CRUD demo app.

The actual 'application' itself is a modified and augmented version of an application featured in the excellent PluralSight course 'Building Applications with React and Flux' by Cory House.

This application uses the following technologies:

* React
* React Router
* Flux
* Node
* Webpack
* Bootstrap

### To run

Install webpack and the development server:

```
> $ npm i webpack-dev-server webpack -g
```

*FYI only - versions of globally installed modules I had locally ( babel-cli@6.3.15, eslint@1.10.3, webpack@1.12.9, webpack-dev-server@1.14.0)*


Install all the project dependencies

```
> $ npm i
```

Run webpack build using this command:

```
> $ npm run build
```

Run the webpack-dev-server using this command:

```
> $ npm run start
```

Open the web browser to `http://localhost:8080/`

Hot reloading of code changes is handled automatically whist the webpack dev server is running.

### To lint

Finally, the project uses eslint, and has been configured with a linting rules similar to those used by airbnb.
You can modify to suit your needs by altering settings in .eslintrc

Webpack is configured to automatically apply linting whenever you build the project.

However, you can explicity just run the linting standalone using the command:

```
> $ npm run lint
```

### Differences to the original course app:

* This codebase uses ES6 / ES7 features throughout, and makes use of Babel.
* The build process is entirely handled via Webpack, there is no gulp or browserify included.
* There are subtle differences:
    * files containing React components use .jsx extensions
    * import statement cleanup (ordering third-party libs, then custom modules)
    * further use of jquery & lodash, and simplification eg. usage of findIndex()
    * bug fix to case where adding additional authors with same first and last names (this app simply creates another author with different id)
    * different ID generation mechanism (as part of the bug fix)

However, it stays as close to the original course source code as possible so users already familiar with Cory House's excellent course can understand the code immediately and compare with the original codebase.
This includes the versions of node modules used including React, and React Router.

Would gladly accept any pull requests with version upgrades that can be stored on a different git branch for users wishing to upgrade.


Enjoy, and I hope this forms the 'template' for a meaningful react, babel, and webpack stack of your own!

Carr Seldon 28/12/2015
