---
path: '/materials/react-with-analytics'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-with-analytics'
  url: 'https://github.com/sonaye/react-with-analytics'
  github_url: 'https://github.com/sonaye/react-with-analytics'
  subscribers_count: '1'
  stargazers_count: '31'
  tags: ['google-analytics','react','react-router']
  subtitle: 'Google Analytics for React apps with ease.'
  clone_url: 'https://github.com/sonaye/react-with-analytics.git'
  ssh_url: 'git@github.com:sonaye/react-with-analytics.git'
  pushed_at: '2018-10-16T15:01:10Z'
  updated_at: '2019-01-23T06:36:47Z'
  author:
    name: 'sonaye'
    avatar: 'https://avatars1.githubusercontent.com/u/23000873?v=4'
    github_url: 'https://github.com/sonaye'
  latestRelease:
    tag_name: '0.0.5'
    name: ''
    url: 'https://github.com/sonaye/react-with-analytics/releases/tag/0.0.5'
    created_at: '2018-07-04T16:38:32Z'
---
# react-with-analytics

[![npm version](https://badge.fury.io/js/react-with-analytics.svg)](https://badge.fury.io/js/react-with-analytics)

## Install

```bash
yarn add react-ga react-with-analytics
```

## Usage

### Initialize

```js
import { initAnalytics } from 'react-with-analytics';

initAnalytics('UA-00000000-0');
```

### Track pages, users and events

```js
import { trackPage, trackUser, trackEvent } from 'react-with-analytics';

// you can use these anywhere in your app
trackPage('/home');
trackUser('@username');
trackEvent('Editing', 'Deleted Component', 'Game Widget'); // category, action, label
```

### With [react-router](https://github.com/ReactTraining/react-router)

```js
import React from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import withAnalytics, { initAnalytics } from 'react-with-analytics';

initAnalytics('UA-00000000-0');

const Home = () => (
  <div>
    HOME <Link to='/about'>ABOUT</Link>
  </div>
);

const About = () => (
  <div>
    ABOUT <Link to='/'>HOME</Link>
  </div>
);

const Root = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </Switch>
);

// you should only use `withAnalytics` once to wrap your whole app
const App = withRouter(withAnalytics(Root));

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
```

### With [pagify-it](https://github.com/sonaye/pagify-it)

```js
import React from 'react';

import Router, { Link } from 'pagify-it';

import { initAnalytics, trackPage } from 'react-with-analytics';

initAnalytics('UA-00000000-0');

const Home = () => (
  <div>
    HOME <Link to='/about'>ABOUT</Link>
  </div>
);

const About = () => (
  <div>
    ABOUT <Link to='/'>HOME</Link>
  </div>
);

const routes = {
  '/': Home,
  '/about': About
};

const App = () => <Router {...{ routes }} onChange={path => trackPage(path)} />;

export default App;
```
