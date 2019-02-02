---
path: '/materials/react-svg-textures'
title: 'react-svg-textures'
url: 'https://github.com/finnfiddle/react-svg-textures'
github_url: 'https://github.com/finnfiddle/react-svg-textures'
author: 'finnfiddle'
watchers_count: '22'
stargazers_count: '22'
img: './screenshot.png'
tags: []
subtitle: 'Textures.js ported to React. Fully isomorphic.'
latestRelease:
  tag_name: 'undefined'
  name: 'undefined'
  url: 'undefined'
  created_at: 'undefined'
---

![alt text](screenshot.png)

# react-svg-textures :star:

> [Textures.js](http://riccardoscalco.github.io/textures/) in React made simple :zap:. **react-svg-textures** is a port of the [Textures.js](http://riccardoscalco.github.io/textures/) library as React components with multiple options via props for easy usage!
<!-- [![Travis][build-badge]][build] -->
[![npm version](https://badge.fury.io/js/react-svg-textures.svg)](https://badge.fury.io/js/react-svg-textures)
<!-- [![Coveralls][coveralls-badge]][coveralls] -->

## Installation

**Using Yarn:**

```text
yarn add react-svg-textures
```

**Using NPM:**

```text
npm install react-svg-textures
```

## Usage

```javascript
import React from 'react';
import { Lines } from 'react-svg-textures';

const Texture = () => (
  <svg width={200} height={200}>
    <Lines
      id='pattern'
      strokeWidth={10}
      stroke='purple'
      size={10}
      orientation='diagonal'
      background='blue'
    />
    <circle cx={100} cy={100} r={5} fill='url(#pattern)' />
  </svg>
);

export default Texture;
```

## Available Props Options

```javascript
import PropTypes from 'prop-types';
import { Lines, Circles, Paths } from 'react-svg-textures';

Lines.propTypes = {

    // size must be a number
    size: PropTypes.number,

    // strokeWidth must be a number
    strokeWidth: PropTypes.number,

    // orientation must be a string
    orientation: PropTypes.string,

    // shapeRendering must be a string
    shapeRendering: PropTypes.string,

    // stroke must be a string
    stroke: PropTypes.string,

    // background must be a string
    background: PropTypes.string,

    // id must be a string
    id: PropTypes.string

};

Circles.propTypes = {

    // size must be a number
    size: PropTypes.number,

    // strokeWidth must be a number
    strokeWidth: PropTypes.number,

    // stroke must be a string
    stroke: PropTypes.string,

    // background must be a string
    background: PropTypes.string,

    // id must be a string
    id: PropTypes.string,

    // complement must be a boolean
    complement: PropTypes.bool,

    // radius must be a number
    radius: PropTypes.number

};

Paths.propTypes = {

    // size must be a number
    size: PropTypes.number,

    // d must be 'squares', 'nylon', 'waves', 'woven', 'caps', 'crosses' or 'hexagons'
    d: PropTypes.oneOf([
        'squares',
        'nylon',
        'waves',
        'woven',
        'caps',
        'crosses',
        'hexagons'
    ])

    // strokeWidth must be a number
    strokeWidth: PropTypes.number,

    // shapeRendering must be a string
    shapeRendering: PropTypes.string,

    // stroke must be a string
    stroke: PropTypes.string,

    // background must be a string
    background: PropTypes.string,

    // id must be a string
    id: PropTypes.string,

};
```

## License

MIT License

Copyright (c) 2018 Finn Fitzsimons

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

        