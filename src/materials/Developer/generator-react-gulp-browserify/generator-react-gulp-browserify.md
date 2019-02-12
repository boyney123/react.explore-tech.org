---
path: '/materials/generator-react-gulp-browserify'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'generator-react-gulp-browserify'
  url: 'https://github.com/randylien/generator-react-gulp-browserify'
  github_url: 'https://github.com/randylien/generator-react-gulp-browserify'
  subscribers_count: '13'
  stargazers_count: '425'
  tags: ['']
  subtitle: 'A Yeoman Generator for facebooks React library. It includes gulp, browserify, livereload and famous official Twitter bootstrap Sass version'
  clone_url: 'https://github.com/randylien/generator-react-gulp-browserify.git'
  ssh_url: 'git@github.com:randylien/generator-react-gulp-browserify.git'
  pushed_at: '2016-10-10T10:43:35Z'
  updated_at: '2018-12-16T12:57:09Z'
  author:
    name: 'randylien'
    avatar: 'https://avatars3.githubusercontent.com/u/40940?v=4'
    github_url: 'https://github.com/randylien'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---

# generator-react-gulp-browserify [![Build Status](https://secure.travis-ci.org/randylien/generator-react-gulp-browserify.png?branch=master)](https://travis-ci.org/randylien/generator-react-gulp-browserify)

> [Yeoman](http://yeoman.io) generator for facebook's React library - Integrate with gulp and browserify.

## What's new?

- Added watchify support
- We use browserify extension instead of gulp extension
- Autorun `bower install` & `npm install` by default

## What's inside?

Bundled:

- Gulp
- Bower
- jQuery (optional)
- Browserify
- Reactify - (removed)
- Babelify Help to transform JSX (consider to use babelify later)
- Watchify support! (Sourcemap also!)
- livereload (BrowserSync)
- jshintrc file (although eslint is much better)

## To be added

- React Bootstrap instead of Sass Bootstrap

Optional: and some should not be used except for compatibility

- Sass with Compass
- Bootstrap - Twitter Bootstrap's official Sass version
- Modernizr
- Jade for HTML templates (deprecated used React JSX instead)
- CoffeeScript for JavaScript (deprecated use React JSX instead)
- Jest for unit tests

## Environment requirements

- node.js 0.12 (I suggest to use [nvm](https://github.com/creationix/nvm) to manage your node environment.)
- Sass >= 3.4 if you want to use Sass

## Getting Started

```
$ npm install -g yo                                # Install Yeoman (if you don't have it yet)...
$ npm install -g generator-react-gulp-browserify   # ...then install this generator...
$ yo react-gulp-browserify                         # ...and run it.
```

## If you are doing a fork

Then you need to `git clone` your fork and from there use npm link. See
http://yeoman.io/authoring/

```
git clone git@github.com/<your git repo>/generate-react-gulp-browserify
cd generate-react-gulp-browserify
npm link
```

If you chose to use sass, you'll need to install it with `gem install sass`.
If you find your css build results are empty, update your sass gem.

## Output folders

scripts - /scripts  
styles - /styles  
fonts - /fonts

Now, when everything is ready, run the watch task and begin to develop your React components.

```
$ gulp watch
```

How to run test?  
Currently, I prefer to run test tasks from npm. Please run this command.

```
$ npm test
```

After development, you can run this task to generate production code.

```
$ gulp build
```

## License

MIT
