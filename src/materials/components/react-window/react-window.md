---
path: '/materials/react-window'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-window'
  url: 'https://react-window.now.sh/'
  github_url: 'https://github.com/bvaughn/react-window'
  subscribers_count: '49'
  stargazers_count: '2960'
  tags: ['']
  subtitle: 'React components for efficiently rendering large lists and tabular data'
  clone_url: 'https://github.com/bvaughn/react-window.git'
  ssh_url: 'git@github.com:bvaughn/react-window.git'
  pushed_at: '2019-02-06T16:40:17Z'
  updated_at: '2019-02-12T17:13:55Z'
  author:
    name: 'bvaughn'
    avatar: 'https://avatars0.githubusercontent.com/u/29597?v=4'
    github_url: 'https://github.com/bvaughn'
  latestRelease:
    tag_name: '1.3.1'
    name: '1.3.1'
    url: 'https://github.com/bvaughn/react-window/releases/tag/1.3.1'
    created_at: '2018-12-03T23:39:24Z'
---
# react-window

> React components for efficiently rendering large lists and tabular data

[![NPM registry](https://img.shields.io/npm/v/react-window.svg?style=for-the-badge)](https://yarnpkg.com/en/package/react-window) [![Travis](https://img.shields.io/badge/ci-travis-green.svg?style=for-the-badge)](https://travis-ci.org/bvaughn/react-window) [![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)](LICENSE)

## Install

```bash
# Yarn
yarn add react-window

# NPM
npm install --save react-window
```

## Usage

Learn more at [react-window.now.sh](https://react-window.now.sh/).

## Frequently asked questions

#### How is `react-window` different from `react-virtualized`?
I wrote `react-virtualized` several years ago. At the time, I was new to both React and the concept of windowing. Because of this, I made a few API decisions that I later came to regret. One of these was adding too many non-essential features and components. Once you add something to an open source project, removing it is pretty painful for users.

`react-window` is a complete rewrite of `react-virtualized`. I didn't try to solve as many problems or support as many use cases. Instead I focused on making the package **smaller**<sup>1</sup> and **faster**. I also put a lot of thought into making the API (and documentation) as beginner-friendly as possible (with the caveat that windowing is still kind of an advanced use case).

If `react-window` provides the functionality your project needs, I would strongly recommend using it instead of `react-virtualized`. However if you need features that only `react-virtualized` provides, you have two options:

1. Use `react-virtualized`. (It's still widely used by a lot of successful projects!)
2. Create a component that decorates one of the `react-window` primitives and adds the functionality you need. You may even want to release this component to NPM (as its own, standalone package)! 🙂

<sup>1 - Adding a `react-virtualized` list to a CRA project increases the (gzipped) build size by ~33.5 KB. Adding a `react-window` list to a CRA project increases the (gzipped) build size by &lt;2 KB.</sup>

## License

MIT © [bvaughn](https://github.com/bvaughn)
