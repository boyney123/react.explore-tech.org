---
path: '/materials/victory'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'victory'
  url: 'http://formidable.com/open-source/victory/'
  github_url: 'https://github.com/FormidableLabs/victory'
  subscribers_count: '112'
  stargazers_count: '6804'
  tags: ['charts','d3','data-visualization','react']
  subtitle: 'A collection of composable React components for building interactive data visualizations'
  clone_url: 'https://github.com/FormidableLabs/victory.git'
  ssh_url: 'git@github.com:FormidableLabs/victory.git'
  pushed_at: '2019-02-05T05:46:55Z'
  updated_at: '2019-02-12T16:28:58Z'
  author:
    name: 'FormidableLabs'
    avatar: 'https://avatars3.githubusercontent.com/u/5078602?v=4'
    github_url: 'https://github.com/FormidableLabs'
  latestRelease:
    tag_name: 'v30.5.0'
    name: 'v30.5.0'
    url: 'https://github.com/FormidableLabs/victory/releases/tag/v30.5.0'
    created_at: '2018-10-03T23:20:39Z'
---
[![Travis Status][trav_img]][trav_site]
[![Join the chat at https://gitter.im/FormidableLabs/victory](https://badges.gitter.im/FormidableLabs/victory.svg)](https://gitter.im/FormidableLabs/victory?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<h1 align='center'>Victory</h1>

<h4 align='center'>
  an ecosystem of composable React components for building interactive data visualizations.
</h4>

- [Getting Started](#getting-started)
- [Victory Native](#victory-native)
- [API Documentation](http://formidable.com/open-source/victory/docs)
- [Guides](http://formidable.com/open-source/victory/guides)
- [Contributing](#contributing)

* See the **docs and examples** on the website: http://formidable.com/open-source/victory.
* **Experiment** with all Victory components in this [JSBin](http://jsbin.com/qekike/edit) or this [JSFiddle](https://jsfiddle.net/5g20p8vd/6/).
* For support, join the **Gitter chat room** at https://gitter.im/FormidableLabs/victory.

## Getting started

1. Add Victory to your project:

```sh
$ npm install victory --save
```

2. Add your first Victory component:

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';

class PieChart extends Component {
  render() {
    return <VictoryPie />;
  }
}

render(<PieChart />, document.getElementById('app'));
```

3. `VictoryPie` component will be rendered, and you should see:

<p align='center'>
  <img align='center' width='471' alt='pie' src='https://cloud.githubusercontent.com/assets/3719995/20915779/b51e3652-bb3c-11e6-8243-6e7521a59115.png'>
</p>

## Requirements

Projects using Victory should also depend on [React][]

## Victory Native

Want to use `Victory` with React Native? Check out [victory-native](https://github.com/FormidableLabs/victory-native)
Victory Native shares most of its code with Victory, and has a nearly identical api!

## [Contributing](CONTRIBUTING.md)

## Issues

### Jest Snapshots

If you want to use [Jest snapshot testing](https://github.com/storybooks/storybook/tree/master/addons/storyshots)
with Victory, you may encounter a problem where the Jest snapshot changes every time, due to a randomly generated `clipId`
being used for a `VictoryClipContainer` group component.
The solution to this is to set a static `clipId` on your `VictoryClipContainer`.

For example, when creating a `VictoryLine` component, you can pass a `groupComponent` prop:

```js
<VictoryLine groupComponent={<VictoryClipContainer clipId={1} />} />
```

Now the `clipId` attached to your `VictoryLine` component will always be the same, and your snapshot will not change with each test run.

[react]: https://facebook.github.io/react/
[trav_img]: https://api.travis-ci.org/FormidableLabs/victory.svg
[trav_site]: https://travis-ci.org/FormidableLabs/victory
