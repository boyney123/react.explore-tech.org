---
path: '/materials/extendable-immutable'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'extendable-immutable'
  url: 'https://github.com/kitten/extendable-immutable'
  github_url: 'https://github.com/kitten/extendable-immutable'
  subscribers_count: '2'
  stargazers_count: '55'
  tags: ['immutable','immutablejs']
  subtitle: 'Wrapper classes around Immutable.js that turn it inheritable'
  clone_url: 'https://github.com/kitten/extendable-immutable.git'
  ssh_url: 'git@github.com:kitten/extendable-immutable.git'
  pushed_at: '2018-03-06T00:38:47Z'
  updated_at: '2018-10-30T16:49:45Z'
  author:
    name: 'kitten'
    avatar: 'https://avatars0.githubusercontent.com/u/2041385?v=4'
    github_url: 'https://github.com/kitten'
  latestRelease:
    tag_name: 'v1.2.0'
    name: 'v1.2.0 Stable'
    url: 'https://github.com/kitten/extendable-immutable/releases/tag/v1.2.0'
    created_at: '2016-09-21T14:35:28Z'
---
<p align='center'><img src='https://raw.githubusercontent.com/philpl/extendable-immutable/master/docs/intro.gif' width=400></p>
<p align='center'>
<strong>Wrapper classes around Immutable.js that turn it inheritable</strong>
<br><br>
<a href='https://travis-ci.org/philpl/extendable-immutable'><img src='https://img.shields.io/travis/philpl/extendable-immutable/master.svg'></a>
<a href='https://coveralls.io/github/philpl/extendable-immutable'><img src='https://img.shields.io/coveralls/philpl/extendable-immutable/master.svg'></a>
<a href='https://npmjs.com/package/extendable-immutable'><img src='https://img.shields.io/npm/dm/extendable-immutable.svg'></a>
<a href='https://npmjs.com/package/extendable-immutable'><img src='https://img.shields.io/npm/v/extendable-immutable.svg'></a>
</p>

# Extendable [Immutable.js](https://github.com/facebook/immutable-js/)

## About

Ever wished that you could have OrderedMaps, Maps or Lists with extra methods,
that make your life easier? `.ofCourse()`!

- Behaves like normal [Immutable.js](https://github.com/facebook/immutable-js/) data structures
- Doesn't break [Immutable.js'](https://github.com/facebook/immutable-js/) inheritance (*.is and instanceof still pass!)

## Getting Started

Installing the latest version via npm takes just a second:

```bash
npm install --save extendable-immutable
```

Import what you need:

```js
import { OrderedMap } from 'extendable-immutable'

class Collection extends OrderedMap {
// ...
```

## Quick Intro

```js
import { OrderedMap } from 'extendable-immutable'

class Collection extends OrderedMap {
  static isCollection(val) {
    return val && val instanceof Collection;
  }

  doMagic() {
    return this.map(x => x.set('magic', true));
  }
}

const magic = new Collection();

magic instanceof Immutable.OrderedMap; // true
Immutable.OrderedMap.isOrderedMap(magic); // true
```

