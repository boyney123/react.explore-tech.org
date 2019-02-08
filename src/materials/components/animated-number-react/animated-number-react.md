---
path: '/materials/animated-number-react'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'animated-number-react'
  url: 'https://github.com/Leocardoso94/animated-number-react'
  github_url: 'https://github.com/Leocardoso94/animated-number-react'
  subscribers_count: '1'
  stargazers_count: '4'
  tags: ['animated-number','animation','react','react-animations','react-library','react-number-input']
  subtitle: 'Super easy way to animate numbers with React'
  clone_url: 'https://github.com/Leocardoso94/animated-number-react.git'
  ssh_url: 'git@github.com:Leocardoso94/animated-number-react.git'
  pushed_at: '2018-06-20T19:53:42Z'
  updated_at: '2019-01-28T03:12:10Z'
  author:
    name: 'Leocardoso94'
    avatar: 'https://avatars3.githubusercontent.com/u/12713314?v=4'
    github_url: 'https://github.com/Leocardoso94'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# animated-number-react

![npm](https://img.shields.io/npm/dt/animated-number-react.svg) [![Build Status](https://travis-ci.org/Leocardoso94/animated-number-react.svg?branch=master)](https://travis-ci.org/Leocardoso94/animated-number-react) [![](https://data.jsdelivr.com/v1/package/npm/animated-number-react/badge)](https://www.jsdelivr.com/package/npm/animated-number-react) ![](http://img.badgesize.io/leocardoso94/animated-number-react/master/dist/AnimatedNumber.umd.min.js)

> A simple animated number for React, using [anime](https://github.com/juliangarnier/anime).

> Live demo [here](https://codesandbox.io/s/1z7nw5rnp3)

![](https://media.giphy.com/media/iMQAMgUSFrh7X2xBCZ/giphy.gif)

## Usage

```bash
$ npm install animated-number-react
# OR
$ yarn add animated-number-react
```

```jsx
import AnimatedNumber from 'animated-number-react';

export default class App extends Component {
  state = {
    value: 150
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  formatValue = value => value.toFixed(2);
  render() {
    return (
      <div>
        <input
          type='number'
          onChange={this.handleChange}
          value={this.state.value}
        />
        <AnimatedNumber
          value={this.state.value}
          formatValue={this.formatValue}
        />
      </div>
    );
  }
}
```

[View demo here](https://codesandbox.io/s/1z7nw5rnp3)
[![Edit animated-number-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1z7nw5rnp3)

## Props

Following `props` are used while initialization

> Note : Only `value` is a required prop. Others are optional

| Prop Name             | Type              | Description                                                                                    |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| value `(required)`    | [ Number, String] | number that will be animated                                                                   |
| duration `(optional)` | Number            | the duration of animation                                                                      |
| delay `(optional)`    | Number            | the delay of animation                                                                         |
| easing `(optional)`   | String            | you can found all valid values [here](https://github.com/juliangarnier/anime#easing-functions) |

#### Callbacks props

Execute a function at the beginning, during or when an animation or timeline is completed.

| Names       | Types    | Arguments          | Info                                               |
| ----------- | -------- | ------------------ | -------------------------------------------------- |
| formatValue | Function | value `Number`     | A function that will manipulate the animated value |
| update      | Function | animation `Object` | Called at time = 0                                 |
| run         | Function | animation `Object` | Called after delay is finished                     |
| begin       | Function | animation `Object` | Called after animation delay is over               |
| complete    | Function | animation `Object` | Called only after all the loops are completed      |

### Format Value

`formatValue()` is used to format the animatedValue.

### Update

`update()` is called on every frame while the instance is playing.

### Begin

`begin()` is called once after the delay is finished.

Check if the animation has begun with `myAnimation.began`, return `true` or `false`.

### Run

`run()` is called every frame after the delay is finished.

### Complete

`complete()` is called once after the animation is finished.
