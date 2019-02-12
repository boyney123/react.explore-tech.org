---
path: '/materials/baobab-react'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'baobab-react'
  url: 'https://github.com/Yomguithereal/baobab-react'
  github_url: 'https://github.com/Yomguithereal/baobab-react'
  subscribers_count: '15'
  stargazers_count: '290'
  tags: ['']
  subtitle: 'React integration for Baobab.'
  clone_url: 'https://github.com/Yomguithereal/baobab-react.git'
  ssh_url: 'git@github.com:Yomguithereal/baobab-react.git'
  pushed_at: '2018-01-16T09:45:38Z'
  updated_at: '2019-02-04T12:04:56Z'
  author:
    name: 'Yomguithereal'
    avatar: 'https://avatars1.githubusercontent.com/u/2571951?v=4'
    github_url: 'https://github.com/Yomguithereal'
  latestRelease:
    tag_name: '3.0.0'
    name: 'v3.0.0'
    url: 'https://github.com/Yomguithereal/baobab-react/releases/tag/3.0.0'
    created_at: '2017-09-29T09:13:13Z'
---
[![Build Status](https://travis-ci.org/Yomguithereal/baobab-react.svg)](https://travis-ci.org/Yomguithereal/baobab-react)

# baobab-react

Welcome to [baobab](https://github.com/Yomguithereal/baobab)'s [React](https://facebook.github.io/react/) integration (from v2.0.0 and onwards).

Implemented patterns:

* [Mixins](docs/mixins.md)
* [Higher order components](docs/higher-order.md) (curried so also usable as ES7 decorators)

## Summary

* [Installation](#installation)
* [On root & branches](#on-root--branches)
* [Patterns](#patterns)
  * [Mixins](#mixins)
  * [Higher Order Components](#higher-order-components)
* [Common pitfalls](#common-pitfalls)
* [Contribution](#contribution)
* [License](#license)

## Installation

You can install `baobab-react` through npm:

```
npm install baobab-react
```

*Peer dependencies*

This library necessitate that you install `baobab >= 2.0.0` and `react >= 0.13.x` (plus `react-dom >= 0.14.x` if required).

Then require the desired pattern and only this one will be loaded (meaning that your browserify/webpack bundle, for instance, won't load unnecessary files and end up bloated).

*Example*

```js
var mixins = require('baobab-react/mixins');
```

## On root & branches

In order to keep component definitions detached from any particular instance of Baobab, the mixins, higher order components etc. are divided into two:

* The **Root** aims at passing a baobab tree through context so that child component (branches) may use it. Typically, your app's top-level component will probably be a root.
* The **Branches**, bound to cursors, get their data from the tree given by the root.

This is necessary so that isomorphism can remain an enjoyable stroll in the park (your UI would remain a pure function).

## Patterns

### Mixins

[Dedicated documentation](docs/mixins.md)

### Higher Order Components

[Dedicated documentation](docs/higher-order.md)

## Common pitfalls

**Controlled input state**

If you need to store a react controlled input's state into a baobab tree, remember you have to commit changes synchronously through the `tree.commit` method or else you'll observe nasty cursor jumps in some cases.

```js
var PropTypes = require('baobab-react/prop-types').PropTypes;

var Input = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    inputValue: ['inputValue']
  },
  contextTypes: {
    tree: PropTypes.baobab
  },
  onChange: function(e) {
    var newValue = e.target.value;

    // If one edits the tree normally, i.e. asynchronously, the cursor will hop
    this.cursor.set(newValue);

    // One has to commit synchronously the update for the input to work correctly
    this.cursor.set(newValue);
    this.context.tree.commit();
  },
  render: function() {
    return <input onChange={this.onChange} value={this.state.inputValue} />;
  }
});
```

## Contribution

Contributions are obviously welcome.

Be sure to add unit tests if relevant and pass them all before submitting your pull request.

```bash
# Installing the dev environment
git clone git@github.com:Yomguithereal/baobab-react.git
cd baobab-react
npm install

# Running the tests
npm test

# Linting
npm run lint

# Building a independent version
npm run build

# or per pattern
npm run build-mixins
npm run build-higher-order
```

## License
MIT
