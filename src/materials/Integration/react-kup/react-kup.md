---
path: '/materials/react-kup'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-kup'
  url: 'https://github.com/snd/react-kup'
  github_url: 'https://github.com/snd/react-kup'
  subscribers_count: '5'
  stargazers_count: '22'
  tags: ['']
  subtitle: 'react-kup is a simple, nonintrusive alternative to JSX for coffeescript'
  clone_url: 'https://github.com/snd/react-kup.git'
  ssh_url: 'git@github.com:snd/react-kup.git'
  pushed_at: '2016-04-20T11:44:32Z'
  updated_at: '2017-09-22T10:09:26Z'
  author:
    name: 'snd'
    avatar: 'https://avatars3.githubusercontent.com/u/32397?v=4'
    github_url: 'https://github.com/snd'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# react-kup

[![NPM Package](https://img.shields.io/npm/v/react-kup.svg?style=flat)](https://www.npmjs.org/package/react-kup)
[![Build Status](https://travis-ci.org/snd/react-kup.svg?branch=master)](https://travis-ci.org/snd/react-kup/branches)
[![Sauce Test Status](https://saucelabs.com/buildstatus/reactkup)](https://saucelabs.com/u/reactkup)
[![codecov.io](http://codecov.io/github/snd/react-kup/coverage.svg?branch=master)](http://codecov.io/github/snd/react-kup?branch=master)
[![Dependencies](https://david-dm.org/snd/react-kup.svg)](https://david-dm.org/snd/react-kup)

**[react](http://facebook.github.io/react/)-[kup](https://github.com/snd/kup) is a simple, nonintrusive alternative to [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) for [coffeescript](http://coffeescript.org/)**

- use all coffeescript features naturally when building a react component's virtual-DOM
- [tiny single file with just under 100 lines of simple, readable, maintainable code](src/react-kup.coffee)
- [huge test suite](test/react-kup.coffee)
  passing [![Build Status](https://travis-ci.org/snd/react-kup.svg?branch=master)](https://travis-ci.org/snd/react-kup/branches)
  with [![codecov.io](http://codecov.io/github/snd/react-kup/coverage.svg?branch=master)](http://codecov.io/github/snd/react-kup?branch=master)
  code coverage
- continuously tested in Node.js (0.12, 4 and 5) and all relevant browsers:
  [![Sauce Test Status](https://saucelabs.com/browser-matrix/reactkup.svg)](https://saucelabs.com/u/reactkup)
- supports CommonJS, [AMD](http://requirejs.org/docs/whyamd.html) and browser globals
- used in production
- npm package: `npm install react-kup`
- bower package: `bower install react-kup`
- no additional build step required
- no react mixin
- same concept as [**kup**](https://github.com/snd/kup) (kup is an html builder for nodejs)
  but builds up nested react elements instead of html strings.
- supports all tags supported by react
- [changelog](CHANGELOG.md)

```
npm install react-kup
```

```
bower install react-kup
```

``` javascript
> var reactKup = require('react-kup');
```

[lib/react-kup.js](lib/react-kup.js) supports [AMD](http://requirejs.org/docs/whyamd.html).  
sets the global variable `reactKup` when
neither CommonJS nor
[AMD](http://requirejs.org/docs/whyamd.html) are available.

```coffeescript
TodoList = React.createClass
  render: ->
    that = this
    createItem = (itemText) ->
      reactKup (k) ->
        k.li itemText
    reactKup (k) ->
      k.ul that.props.items.map createItem

TodoApp = React.createClass
  getInitialState: ->
    items: ['Buy Milk', 'Buy Sugar']
    text: 'Add #3'
  onChange: (e) ->
    this.setState({text: e.target.value})
  handleSubmit: (e) ->
    e.preventDefault()
    nextItems = this.state.items.concat([this.state.text])
    nextText = ''
    this.setState({items: nextItems, text: nextText})
  render: ->
    that = this

    reactKup (k) ->
      k.div ->
        k.h3 'TODO'
        k.build TodoList,
          items: that.state.items
        k.form {
          onSubmit: that.handleSubmit
        }, ->
          k.input
            onChange: that.onChange
            value: that.state.text
          k.button 'Add ##{that.state.items.length + 1}'
```

[look at the tests for additional examples](test/react-kup.coffee)

### [contributing](contributing.md)

### [changelog](CHANGELOG.md)

### [license: MIT](LICENSE)
