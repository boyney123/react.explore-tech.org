---
path: '/materials/tydel'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'tydel'
  url: 'http://tydel.js.org'
  github_url: 'https://github.com/fahad19/tydel'
  subscribers_count: '3'
  stargazers_count: '37'
  tags: ['data','immutable','javascript','models','structure']
  subtitle: 'Typed Models & Collections for JavaScript data structure'
  clone_url: 'https://github.com/fahad19/tydel.git'
  ssh_url: 'git@github.com:fahad19/tydel.git'
  pushed_at: '2017-10-03T12:05:01Z'
  updated_at: '2019-01-21T12:47:17Z'
  author:
    name: 'fahad19'
    avatar: 'https://avatars2.githubusercontent.com/u/20046?v=4'
    github_url: 'https://github.com/fahad19'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# tydel
<!--{h1:.massive-header.-with-tagline}-->

> Typed models and collections

[![Build Status](https://img.shields.io/travis/fahad19/tydel/master.svg)](http://travis-ci.org/fahad19/tydel) [![npm](https://img.shields.io/npm/v/tydel.svg)](https://www.npmjs.com/package/tydel) [![star](https://img.shields.io/github/stars/fahad19/tydel.svg?style=social&label=Star)](https://github.com/fahad19/tydel)

For documentation, visit [http://tydel.js.org](http://tydel.js.org).

If you are looking for a reactive version of Tydel with RxJS, consider using [frint-data](https://frint.js.org/docs/packages/frint-data).

## Overview

Tydel is a small library aimed at giving you a solid and strict **foundation** for your **data structure** needs in JavaScript.

Install it via [npm](https://npmjs.com):

```sh
$ npm install --save tydel
```

Basic usage example:

```js
import { Types, createModel } from 'tydel';

const Todo = createModel({
  title: Types.string.isRequired,
  description: Types.string
});

const todo = new Todo({
  title: 'My first ToDo',
  description: 'notes here...'
});

console.log(todo.title); // `My first ToDo`
```

Or load it via [unpkg](https://unpkg.com):

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min.js'></script>
<script src='https://unpkg.com/tydel@latest/dist/tydel.min.js'></script>

<script>
  // window.Tydel
</script>
```

Try it out:

<a class='jsbin-embed' href='http://jsbin.com/fudonovogi/embed?js,output'>JSBin</a>

<script src='http://static.jsbin.com/js/embed.min.js?3.39.11'></script>

## Terminologies

The three main **terminologies** you would come across are:

* [Types](./docs/getting-started/types.md): Strict type **expressions** for Model's values,
* [Models](./docs/getting-started/models.md): for **representing** your data, and
* [Collections](./docs/getting-started/collections.md): for containing Models like an **array**.

## Guides

There is a [quickstart](./docs/intro/quickstart.md) guide which would get you up an running in no time. To understand the concepts well, read the [getting started](./docs/getting-started/types.md) guides.

[Install](./docs/intro/installation.md) it, and enjoy!

## Integrations & Resources

* [tydel-react](https://github.com/fahad19/tydel-react): React.js bindings
* [tydel-logger](https://github.com/fahad19/tydel-logger): Prints state changes to console

## Thanks

These beautifully made open source projects have directly or indirectly played an influential role for Tydel, and a huge amount of thanks go to their authors and contributors:

* [Backbone.js](http://backbonejs.org/)
* [Redux](https://redux.js.org/)
* [MobX](https://mobxjs.github.io/mobx/)

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
