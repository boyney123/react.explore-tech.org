---
path: '/materials/redux-actiontyper'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'redux-actiontyper'
  url: 'https://github.com/alnorris/redux-actiontyper'
  github_url: 'https://github.com/alnorris/redux-actiontyper'
  subscribers_count: '0'
  stargazers_count: '48'
  tags: ['']
  subtitle: 'Helper to create less verbose action types for Redux'
  clone_url: 'https://github.com/alnorris/redux-actiontyper.git'
  ssh_url: 'git@github.com:alnorris/redux-actiontyper.git'
  pushed_at: '2018-03-14T17:29:34Z'
  updated_at: '2018-11-08T21:19:29Z'
  author:
    name: 'alnorris'
    avatar: 'https://avatars3.githubusercontent.com/u/882627?v=4'
    github_url: 'https://github.com/alnorris'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Action Typer

Helper to create slightly less verbose redux action types. Uses ES6 Proxies!

**Highly Performant**: Proxy is only run once at startup.

Includes optional prefixer 

# Warning

redux-actiontyper requires native ES6 proxy support. Due to the limitations of ES5, Proxies cannot be transpiled or polyfilled to old browsers. If you need to support old browsers please check [caniuse](https://caniuse.com/#feat=proxy) to see if this package is appropriate for your project.


## Install

`npm install redux-actiontyper --save`

or for yarn users

`yarn add redux-actiontyper`

## Old way

```javascript

const GET_CLIENTS = 'GET_CLIENTS'
const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS'
const GET_CLIENTS_FAIL = 'GET_CLIENTS_FAIL'
const SET_CLIENTS_FILTER = 'SET_CLIENTS_FILTER'
```

## New Way

```javascript
import actionTyper from 'redux-actiontyper';

const { GET_CLIENTS,
	GET_CLIENTS_SUCCESS,
	GET_CLIENTS_FAIL, 
	SET_CLIENTS_FILTER } = actionTyper('HomeState/');
    
console.log(GET_CLIENTS)  // HomeState/GET_CLIENTS
console.log(GET_CLIENTS_FAIL)  // HomeState/GET_CLIENTS_FAIL
```
