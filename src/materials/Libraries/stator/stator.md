---
path: '/materials/stator'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'stator'
  url: 'https://github.com/cs01/stator'
  github_url: 'https://github.com/cs01/stator'
  subscribers_count: '2'
  stargazers_count: '24'
  tags: ['javascript','react','state-management']
  subtitle: 'Simple, plain JavaScript state management with built-in support for React'
  clone_url: 'https://github.com/cs01/stator.git'
  ssh_url: 'git@github.com:cs01/stator.git'
  pushed_at: '2018-06-18T07:23:45Z'
  updated_at: '2018-12-21T14:30:35Z'
  author:
    name: 'cs01'
    avatar: 'https://avatars2.githubusercontent.com/u/5715368?v=4'
    github_url: 'https://github.com/cs01'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Stator &middot; [![version](https://img.shields.io/badge/release-v0.1.6-blue.svg)](https://www.npmjs.com/package/statorgfc)  [![build status](https://travis-ci.org/cs01/stator.svg?branch=master)](https://travis-ci.org/cs01/statorgfc)


### Install
```
yarn add statorgfc
```

**simple, plain JavaScript state management with built-in support for React.**

![Image](https://github.com/cs01/statorgfc/raw/master/images/counter.png)
[Try it Live](https://codesandbox.io/s/github/cs01/statorgfc/tree/master/examples/counter)

Stator works by adding methods around a global plain JavaScript object, and attaching callback functions to it. The callback functions automatically call `setState` on the Component(s) that need it. [Read more](https://medium.com/@grassfedcode/state-management-tools-for-a-react-powered-frontend-to-gdb-686db2d122a5).

It was developed as part of [gdbgui](https://github.com/cs01/gdbgui) and has recently been bundled into this library. gdbgui is 5749 lines of JavaScript in 41 files that create a frontend to a C/C++ debugger. It has many disparate components that need to update frequently and efficiently from websocket and AJAX data.

### Create, Read, Update
This should look very similar to React's API.
```js
import {store} from 'statorgfc'

store.initialize({count: 0})

store.get('count')  // 0
store.set({count: store.get('count') + 1}) // changed value to 1
store.get('count') // 1
```

### Subscribe a React Component to changes
Call `store.connectComponentState()` in your constructor. That's it!
```js
import React from 'react'
import {store} from 'statorgfc'

store.initialize({
    numSheep: 10,
    numWolves: 2,
    numChickens: 90
})

class SheepWatcher extends React.Component {
  constructor(){
    super()
    // connect global store to the state of this component
    // this.setState will be called when 'numSheep' or 'numWolves' changes
    store.connectComponentState(this, ['numSheep', 'numWolves'])  
  }
  render(){
    return {this.state.numSheep > this.state.numWolves ? 'all good' : 'watch out sheep!'}
  }
}
```

```js
// somewhere else in code far, far away...
store.set({numWolves: 15})  // SheepWatcher has setState() called
store.set({numSheep: store.get('numSheep') + 1})  // SheepWatcher has setState() called
store.set({numChickens: 100})  // No call to setState() in SheepWatcher
// because sheepWatcher isn't connected to the numChickens key
```

That's all you need to know to get started. There are a some other helper functions and options which you can read about below.


#### View Subscribers for each key
```js
let watchers = store.getKeySubscribers()
console.log(watchers)
// {
//   'numSheep': ['SheepWatcher'],
//   'numWolves': ['SheepWatcher']
// }
```

If a key in the store is not being acted upon by anything, that is useful to know too. You can probably (but not definitely) remove that key from the global store and simply store it statically somewhere else.
```js
let no_watchers = store.getUnwatchedKeys()
console.log(no_watchers)
// ['numChickens']
```

### Use Middleware
```js
store.use((key, oldval, newval)=>console.log(key, 'is about to change'))
```
Read more on middleware below and in the API documentation.

### Subscribe a JavaScript function to changes
```js
import {store} from 'statorgfc'

store.initialize({count: 0})

store.subscribe(()=>console.log('store changed!')) // call anytime something changes, and log entire store
store.set({count: store.get('count') + 1})  // prints {count: 1}
store.set({count: store.get('count')})  // no callbacks triggered, because the value didn't actually change
```

See [more examples](https://github.com/cs01/statorgfc/tree/master/examples/).

## When to Use
Used for state management of a JavaScript application when [any of the following](https://medium.com/@fastphrase/when-to-usoe-redux-f0aa70b5b1e2) are true
* the same piece of application state needs to be mapped to multiple container components
* there are global components that can be accessed from anywhere
* too many props are being passed through multiple hierarchies of components

If you can maintain the state of a component within the component itself **you should not use statorgfc**.

## Features:
* **Global State**: State management occurs in one location -- a variable named *store*.
* **Intuitive, Small API**: Similar to React's, with no boilerplate necessary
* **Typesafe changes**: Values can only be replaced with data of the same type
* **Immutable data... or not**: You choose if you want to work with immutable data structures by setting a single boolean
* **Efficient**: If a value isn't changed during an update to the store, listeners aren't notified
* **Optional Middleware**: Use or write middleware to perform arbitrary validation, logging, etc. before store's updates occur


## Steps for Use
1. Initialize once with `store.initialize({...})`
2. Subscribe components to keys with `connectComponentState(this, ['key1', 'key2', ...])`
3. Update the store with `store.set('key', val)` or `store.set({key: val})`. This should look familiar to React users.
4. Read the store with `store.get('key')`
5. Repeat step 3 and 4, and Components will automatically and efficiently re-render

There are some constraints built into Stator to ensure better usability.
1. Keys cannot be added or removed after initialization
1. Values must retain the same type during updates
1. The store can only be updated with calls to `store.set()`.
1. The store can only be read with calls to `store.get()`. This returns a copy of the value, so when you update that copy, it does not affect the underlying store until `store.set()` is called.


## API
Methods on store
```js
import {store} from 'statorgfc'
```
### initialize
Initializes store. The initial value must be a JavaScript object with key/value pairs. Keys cannot be added or removed, and the values must retain the same type during updates. Returns nothing.
```js
store.initialize({key1: 'val', key2: 'val'})
```
Options can also be set during initialization.
```js
store.initialize({key1: 'val', key2: 'val'}, {immutable: false, debounce_ms: 10})
```

### set
Change a value in the store. Similar to React's `setState`, this is the only way in which the store should be changed. Also similar to `setState`, an object can be passed in with the updated state. An error is thrown if the key does not already exist in the store.
```js
store.set('mykey', newvalue)
store.set({mykey: newvalue})  // this syntax is okay too
```

### get
Get value or reference to one of the keys in the store. If `store.options.immutable` is true, the value is returned. Otherwise a reference is returned.
```js
let mykey = store.get('mykey')
let myotherkey = store.get('myotherkey')
let entire_store = store.get()  // with no arguments, whole store is returned
// ...update entire_store
store.set(entire_store)
```

### connectComponentState
Connect a react component's state to one or more keys in the store. Returns function that, when called, unsubscribes the Component from listening to those keys.
```js
constructor(){
  super()
  this.unsubscribe = store.connectComponentState(this, ['showModal'])
}
render(){
  return this.state.showModal  // the Component's state automatically has the latest global value for all connected keys
}
componentWillUnmount(){
  this.unsubscribe()
}
```
### subscribeToKeys
Connect a regular JavaScript function to a callback that is called only when one of a subset of the keys has been updated. Returns function that, when called, unsubscribes the function from listening to those keys.

```js
let unsubscribe = store.subscribeToKeys(['myKey'], (keys_changed)=>console.log('myKey changed!'))
```

### getKeySubscribers
Return an object showing which keys are subscribed to by which functions and Components.
```js
let watchers = store.getKeySubscribers()
console.log(watchers)
// {
//   'key1': ['MyComponent1', 'MyComponent2'],
//   'key2': ['MyComponent3', 'my_vanilla_function']
// }
```

### getUnwatchedKeys
Returns an array of keys that do not trigger any callbacks when changed, and therefore may not need to be included in the global store.
```js
let no_watchers = store.getUnwatchedKeys()
console.log(no_watchers)
// ['key1', 'key2']
```

### subscribe
Trigger a callback function after the store changes its value for any key. Prefer `subscribeToKeys` over `subscribe` since callbacks will be triggered less often and therefore make your application more efficient.
```js
let unsubscribe = store.subscribe(function(keys_changed){
    console.log('keys', keys_changed, 'changed!')
    console.log('The store is now:', store.get())
  }
)
```
### use
Use a middleware function. If middleware functions returns true, the next middleware function will run until there are none left. At that point the store is updated and callbacks are dispatched. Otherwise, the middleware chain will stop, the store will not be updated, and callbacks will not be dispatched. Stator ships with some middleware, but any arbitrary function can be used.

Note all middleware functions are called with the same arguments and must conform to this function signature.
```js
function logChanges(key, oldval, newval){
  console.log(key, oldval, ' -> ', newval)
  return true
}
function persistToLocalStorage(key, oldval, newval){
  localStorage.setItem(key, JSON.stringify(newval))
  return true
}
function abortIfFive(key, oldval, newval){
  if(newval === 5){
    // user wants to change value to 5. Don't let this happen.
    console.log('aborting!')
    return false // returning false aborts the store update entirely!
  }
  return true
}
store.use(logChanges)
store.use(abortIfFive)
store.use(persistToLocalStorage)

store.set('key', 3)  // 'key 0 -> 3', localStorage is set, store is updated.
store.set('key', 5)  // 'key 0 -> 5' 'aborting!'. store is not updated.
```

### options
Options are a plain JavaScript object with the following defaults:
```js
options: {
  // when calling store.get() returns copy if true, otherwise reference
  immutable: true,
  // time to delay before notifying subscribers (callbacks) of a change
  debounce_ms: 0,
},
```

They can be set manually or during initialization:
```js
store.options.immutable = false
store.options.debounce_ms = 10
// or you can do this
store.initialize({key: 0}, {immutable: false, debounce_ms: 10})
```
They should be set before using the store and never updated after that.

## Built in Middleware
Stator comes with built in middleware. See [src/middleware.js](https://github.com/cs01/statorgfc/blob/master/src/middleware.js) for the full list of middleware functions.

You can use the built-in middleware like this:
```js
import {store, middleware} from 'statorgfc'
// ...initialize store
store.use(middleware.logChanges)
store.use(middleware.persistToLocalStorage)
```

And of course you can write your own as needed.

## License
MIT

## Author
grassfedcode@gmail.com
