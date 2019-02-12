---
path: '/materials/qaf'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'qaf'
  url: 'https://sonaye.github.io/qaf/'
  github_url: 'https://github.com/sonaye/qaf'
  subscribers_count: '1'
  stargazers_count: '3'
  tags: ['react','state']
  subtitle: 'Components as stores. State management for React based on context.'
  clone_url: 'https://github.com/sonaye/qaf.git'
  ssh_url: 'git@github.com:sonaye/qaf.git'
  pushed_at: '2018-10-06T04:30:15Z'
  updated_at: '2018-10-07T01:29:29Z'
  author:
    name: 'sonaye'
    avatar: 'https://avatars1.githubusercontent.com/u/23000873?v=4'
    github_url: 'https://github.com/sonaye'
  latestRelease:
    tag_name: '0.0.11'
    name: ''
    url: 'https://github.com/sonaye/qaf/releases/tag/0.0.11'
    created_at: '2018-08-24T01:52:16Z'
---
# Qaf

[![npm version](https://badge.fury.io/js/qaf.svg)](https://badge.fury.io/js/qaf) [![Build Status](https://travis-ci.org/sonaye/qaf.svg?branch=master)](https://travis-ci.org/sonaye/qaf)

<img src='qaf.svg' alt='Qaf logo' width='96'>

## Features

- Based on React's new context API (`16.3.0`).
- Every store is a React component.
- Actions, lifecycle methods and more.
- No dependencies, all just React goodness.
- ~2 KB in size, with less than 100 lines of code.

## Design

<img src='tree.png' alt='Design' width='600'>

- The app has at least one store, which is just a React component.
- The app has at least one container (default), which is a collection of store instances.
- Each container has a provider that exposes its store instances to its subscribers.
- Any component can subscribe to any store instance provided.

## Install

```bash
yarn add qaf
```

## Usage

### The store

```js
import { createStore } from 'qaf';

// this creates a store with context hooks, we should do it uniquely for every store
const QafStore = createStore();

// every store is a typical React PureComponent
class Store extends QafStore {}

// or invoke directly
class Store extends createStore() {
  // components subscribing to the store will have access to everything in its state
  state = {
    // state values
    counter: 0,

    // actions are regular functions
    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };

  // lifecycle methods
  componentDidMount() {
    // e.g. make an async call
  }

  // NOTE: don't declare `render`, Qaf will take care of that
}
```

### The component

```js
import { Subscriber, subscribe } from 'qaf';

const Counter = ({ store }) => (
  <div>
    {/* state values are available */}
    <div>{store.counter}</div>

    {/* actions are available */}
    <button onClick={store.inc}>+</button>
    <button onClick={store.dec}>-</button>
  </div>
);

// inject stores by their keys as defined in `<Provider />` to have them as render props
<Subscriber store anotherStore ..>
  {(store, anotherStore, ..) => <Counter {...{ store, anotherStore, .. }} />}
</Subscriber>

// or through a higher order component, a thin wrapper around `<Subscriber />`
subscribe('store', 'anotherStore', ..)(Counter);
```

### The app

```js
import { Provider } from 'qaf';

// the prop name is the key of the store used earlier in `<Subscriber />`
<Provider store={Store} anotherStore={AnotherStore} ..>
  <Counter />
</Provider>
```

## Advanced

### The container

`<Provider />`, `<Subscriber />` and `subscribe()` are all components of a container, which is a collection of store instances. By default, Qaf exposes a main container that we can immediately put to use, but what if we wanted more than one container? (e.g. we need multiple instances of a single store).

```js
import { createContainer } from 'qaf';

// this creates a container with context components, we should do it uniquely for every container
const QafContainer = createContainer();

// which exposes the following components
<QafContainer.Provider .. />
<QafContainer.Subscriber .. />

// and the following method
QafContainer.subscribe(..);
```

### The singular container

Singular containers are a stripped-down version of Qaf containers, where the app uses one single store that houses all the shared state, actions and lifecycle methods. Singular containers are more performant, they utilize one context instead of having multiple contexts (one for each store) and require less computations (no internal component composition and nesting). However, -and as implied in the terminology- we are limited to the usage of one store only.

<img src='singular.png' alt='Singular container design' width='600'>

- The app has one store, which is just a React component.
- The store acts as a provider that exposes its instance to its subscribers.
- Any component can subscribe to the store instance provided.

```js
import { createContainer } from 'qaf';

// this creates a singular container with context components, this is only done once
const { SingularStore, Subscriber, subscribe } = createContainer({
  singular: true
});

// no invocation here, direct inheritance
class Store extends SingularStore {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

// no need to pass any keys
<Subscriber>{store => <Counter {...{ store }} />}</Subscriber>;

// or with a HOC
subscribe(Counter);

// one provider for the whole app
<Store>
  <Counter />
</Store>;
```

### Testing

Qaf stores are React components, we would test them as we would test any other component ([Enzyme example](/test/testing.test.js)).

## Examples

Available [here](https://sonaye.github.io/qaf/) ([source](/examples)).

[![Edit qaf](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3mz6wrrv5?module=%2Fsrc%2FCounter.js)
