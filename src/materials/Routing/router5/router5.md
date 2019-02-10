---
path: '/materials/router5'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'router5'
  url: 'https://router5.js.org'
  github_url: 'https://github.com/router5/router5'
  subscribers_count: '26'
  stargazers_count: '1303'
  tags: ['framework-agnostic','functional','javascript','react','reactive-programming','redux','router','routing','universal']
  subtitle: 'Flexible and powerful universal routing solution'
  clone_url: 'https://github.com/router5/router5.git'
  ssh_url: 'git@github.com:router5/router5.git'
  pushed_at: '2019-02-07T16:32:43Z'
  updated_at: '2019-02-10T20:35:36Z'
  author:
    name: 'router5'
    avatar: 'https://avatars0.githubusercontent.com/u/13135533?v=4'
    github_url: 'https://github.com/router5'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Router5

[![npm version](https://badge.fury.io/js/router5.svg)](http://badge.fury.io/js/router5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/router5/router5.svg)](https://travis-ci.org/router5/router5) [![Join the chat at https://gitter.im/router5/router5](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/router5/router5?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Official website: [router5.js.org](https://router5.js.org)

router5 is a **framework and view library agnostic router**.

* **view / state separation**: router5 processes routing **instructions** and outputs **state** updates.
* **universal**: works client-side and server-side
* **simple**: define your routes, start to listen to route changes
* **flexible**: you have control over transitions and what happens on transitions

```javascript
import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

const routes = [
    { name: 'home', path: '/' },
    { name: 'profile', path: '/profile' }
]

const router = createRouter(routes)

router.usePlugin(browserPlugin())

router.start()
```

**With React \(new context API\)**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { RouteProvider, Route } from 'react-router5'

function App({ route }) {
    if (!route) {
        return null
    }

    if (route.name === 'home') {
        return <h1>Home</h1>
    }

    if (route.name === 'profile') {
        return <h1>Profile</h1>
    }
}

ReactDOM.render(
    <RouteProvider router={router}>
        <Route>{({ route }) => <App route={route} />}</Route>
    </RouteProvider>,
    document.getElementById('root')
)
```

**With observables**

Your router instance is compatible with most observable libraries.

```javascript
import { from } from 'rxjs/observable/from'

from(router).map(({ route }) => {
    /* happy routing */
})
```

### Examples

* With React: [`code`](./examples/react) | [`live`](https://stackblitz.com/github/router5/router5/tree/master/examples/react)
* With React new context API: [`code`](./examples/react-new-context-api) | [`live`](https://stackblitz.com/github/router5/router5/tree/master/examples/react-new-context-api)
* With Redux (and React): [`code`](./examples/react-redux) | [`live`](https://stackblitz.com/github/router5/router5/tree/master/examples/react-redux)

### Docs

* Introduction
    * [Why router5?](https://router5.js.org/introduction/why-router5)
    * [Getting Started](https://router5.js.org/introduction/getting-started)
    * [Ecosystem](https://router5.js.org/introduction/ecosystem)
    * [Core concepts](https://router5.js.org/introduction/core-concepts)
    * [Transition phase](https://router5.js.org/introduction/transition-phase)
* Guides
    * [Defining routes](https://router5.js.org/guides/defining-routes)
    * [Path Syntax](https://router5.js.org/guides/path-syntax)
    * [Router options](https://router5.js.org/guides/router-options)
    * [Navigating](https://router5.js.org/guides/navigating)
    * [In the browser](https://router5.js.org/guides/in-the-browser)
    * [Observing state](https://router5.js.org/guides/observing-state)
* Integration
    * [With React](https://router5.js.org/integration/with-react)
    * [With Redux](https://router5.js.org/integration/with-redux)
* Advanced
    * [Plugins](https://router5.js.org/advanced/plugins)
    * [Middleware](https://router5.js.org/advanced/middleware)
    * [Preventing navigation](https://router5.js.org/advanced/preventing-navigation)
    * [Errors and redirections](https://router5.js.org/advanced/errors-and-redirections)
    * [Dependency injection](https://router5.js.org/advanced/dependency-injection)
    * [Loading async data](https://router5.js.org/advanced/loading-async-data)
    * [Universal routing](https://router5.js.org/advanced/universal-routing)
    * [Listeners plugin](https://router5.js.org/advanced/listeners-plugin)
* [API Reference](https://router5.js.org/api-reference)
