---
path: '/materials/react-rxjs-todomvc'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-rxjs-todomvc'
  url: 'https://github.com/fdecampredon/react-rxjs-todomvc'
  github_url: 'https://github.com/fdecampredon/react-rxjs-todomvc'
  subscribers_count: '13'
  stargazers_count: '338'
  tags: ['']
  subtitle: 'TodoMVC implementation with React and RxJS'
  clone_url: 'https://github.com/fdecampredon/react-rxjs-todomvc.git'
  ssh_url: 'git@github.com:fdecampredon/react-rxjs-todomvc.git'
  pushed_at: '2017-04-18T06:01:17Z'
  updated_at: '2018-11-11T11:22:39Z'
  author:
    name: 'fdecampredon'
    avatar: 'https://avatars2.githubusercontent.com/u/864201?v=4'
    github_url: 'https://github.com/fdecampredon'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# React Rx TodoMVC Example

> [TodoMVC](http://todomvc.com/) implementation built on top of [React](http://facebook.github.io/react/) and [RxJS](https://github.com/Reactive-Extensions/RxJS)

# Running

Simply start a static server on this project folder.

# Building

You have to install [Browserify](http://browserify.org/) then simply run these command :
```
npm install
```
this will install all the dependencies and bundle the project sources files.

# Implementation

This implementation has been inspired by the [React Flux architecture](https://github.com/facebook/react/tree/master/examples/todomvc-flux)

In this implementation has 3 main parts, a `TodoStore`, a list of actions contained in `TodoActions`, and a list of views in the form of React Components.

## The TodoStore:

This store exposes 2 streams: 
* `todos`: An RxJS observable that will contain an up-to-date list of todos. 
* `updates`: an RxJS `Observer` that will receive operations to apply on the list of todos, those operations take the form of functions that create a new version of our todos list.

## The TodoActions: 

A list of Rx Observer that will be exposed to our components, this actions are registered against the `updates` stream of the TodoStore, and will push new operations into this stream when they receive values.

## The Views:

A set of React components that will react to changes in our TodoStores `todos` stream.
In this implementation state and events handlers are managed in a 'reactive' way through the use of a special RxMixin.


```
TodoStore.todos --------------> React Components ---- (push value) ---> TodoActions-- + 
Ʌ                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
+--(apply operation on the todos list) ---TodoStore.updates  <--- (push operations) --+
```

                                
