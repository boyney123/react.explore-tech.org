---
path: '/materials/redux-data-fx'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'redux-data-fx'
  url: 'https://matthieu-beteille.github.io/redux-data-fx/'
  github_url: 'https://github.com/matthieu-beteille/redux-data-fx'
  subscribers_count: '4'
  stargazers_count: '53'
  tags: ['declarative','javascript','react','redux','side-effects']
  subtitle: 'Declarative Side Effects for Redux'
  clone_url: 'https://github.com/matthieu-beteille/redux-data-fx.git'
  ssh_url: 'git@github.com:matthieu-beteille/redux-data-fx.git'
  pushed_at: '2017-12-23T15:26:36Z'
  updated_at: '2019-02-08T06:35:56Z'
  author:
    name: 'matthieu-beteille'
    avatar: 'https://avatars0.githubusercontent.com/u/5712325?v=4'
    github_url: 'https://github.com/matthieu-beteille'
  latestRelease:
    tag_name: 'v3.0.0'
    name: 'v3.0.0'
    url: 'https://github.com/matthieu-beteille/redux-data-fx/releases/tag/v3.0.0'
    created_at: '2017-12-05T13:34:44Z'
---
# Redux Data FX 

Declarative Side Effects for Redux.

It helps you keep your business logic and effectful code separate.

The idea is simple: in addition of your app's new state, your reducers can also return a data structure describing some side effects you want to run.
 
This takes inspiration from the elm architecture but this very implementation's idea comes from [re-frame](https://github.com/Day8/re-frame) in cljs and its effectful handlers. ([re-frame](https://github.com/Day8/re-frame) is an awesome project, you should definitely check it out). 

## Overview

<br />

![Redux Data FX Flow](flow.png)

<br/>

The same way an action represents an intent to update your app's state, an effect description is a declarative intent to perform a side effect.
The actual side effects are performed at the border of the system by effect handlers. 

Effect handlers are going to perform the 'effectful' code interacting with the world (http calls, ...), using the browser's APIs (setTimeout, local storage, etc...), and they can feed data back in the redux loop by dispatching actions.
This way your reducers remain pure functions and it's easy to test that your effect description is correct since they are pure data. (see testing section)

There is a lot of cool tools that can be built around this idea. We can keep track of every effect description to get a clear idea of what has happened at the border of our system (log them, save them, re-perform them, etc...). 

## How does that that work?

Usual reducer signature is:

```(Action, State) -> State```

With redux-data-fx, it becomes:

```(Action, State) -> State | { state: State, effects: Effects }```

Your reducer can either return only a new state, or a combination of a new state and another data structure: the description of some side effects that you want to run.

### 1. Declaratively describe side effects in your reducers.

One of your reducer could look like this:

```javascript
import { fx } from 'redux-data-fx';

function reducer(state = initialState, action) {
  switch(action.type) {
    'noop': 
      return state;
    
    'fetch/success': 
      return { 
        ...state, 
        data: action.payload.data, 
        isFetching: false 
      };

    'fetch/error': 
      return { 
        ...state, 
        error: 'Oops something wrong happened...',
        isFetching: false 
      };

    'fetch-some-data':
      return fx(
        { ...state, isFetching: true },
        [ 
          { 
            effect: 'fetch',           
            url: 'http://some-api.com/data/1',
            method: 'GET',
            onSuccess: 'fetch/success',
            onError: 'fetch/error'
          } 
        ]
      );

    default:
      return state;
  }
}
```

The action 'fetch-some-data' is what we call an effectful action, it updates the state and returns a description of some side effects to run (here an http call).

If we want to run some side effects we need to return the result of the `fx` function called with our app new state and a data structure describing the side effects we want to perform.

```javascript
fx(NewState, Effects)
```

- *NewState:* the new state of our app (what you usually return from our reducer)

- *Effects:* an array containing the descriptions of the side effects you want to run. Each side effect should be described by a map containing at least an 'effect' key, being the id of the effect you want to perform. The data required to actually perform the side effect can be passed through any other keys in the map. (for instance for an api call, you might want to provide the url, the HTTP method, and some parameters). That should remind you of the structure of a redux action: ```{ type: 'myAction1', ...params }```, except that the 'effect' key is used to identify the effect to perform: ```{ effect: 'myEffect1', ...params }```. 

*Note:* the fx function just creates an object of the following shape: 
```{ state: newAppState, effects: someEffectsToRun }```
You *have to* use the ```fx``` function to create this structure just so ```redux-data-fx``` knows that you want to run some effects.
Then ```redux-data-fx``` will update the state and run the effects behind the scene.

### 2. Run side effects

In order to actually run these described side effects you'll need to register some effect handlers. This is where the effectful code will be run (at the border of the system).

For instance to run our fetch side effect we would register the following handler:

```javascript
store.registerFX('fetch', (params, getState, dispatch) => {
  fetch(params.url, {
    method: params.method,
    body: params.body,
    ...,
  }).then(res => dispatch({ type: params.onSuccess, payload: res }))
  .catch(res => dispatch({ type: params.onError, payload: res }))
});
```

The first argument is the handler's id, it needs to be the same as the effect key you'll return in your reducer(s) to trigger this same effect. In this case 'fetch'.

The second argument is the effect handler, the function that will perform the side effect.
This function will be given 3 parameters when called:
- the params provided in the effect map (from your reducer)
- getState: useful if you need to access your state here
- dispatch: so you can dispatch new actions from there

### 3. How to use it?

As simple as this:

```npm install --save redux-data-fx```

```javascript
import { reduxDataFX } from 'redux-data-fx'
import someMiddleware from 'some-middleware';

const enhancer = compose(
  applyMiddleware(someMiddleware),
  reduxDataFX
);

const store = createStore(reducer, initialState, enhancer);

// or createStore(reducer, enhancer); if you don't want to provide the initialState here
// or createStore(reducer, initialState, reduxDataFx); if no middleware

// then you can register as many FX as you want
store.registerFX('fetch', (params, getState, dispatch) => {
...
});

store.registerFX('localStorage', (params, getState, dispatch) => {
 ...
});

store.registerFX('dispatchLater', (params, getState, dispatch) => {
 ...
});
```

You can import ```createStore``` from 'redux'. But if you are using typescript you should import it from 'redux-data-fx' (it's the same thing except the types will be right).

### Use with ```combineReducers```

If you want this to work with ```combineReducers``` from redux, you just have to use the one from ```redux-data-fx``` instead. You'll now be able to return effects from the reducers you're combining.

```javascript
import { reduxDataFX, combineReducers } from 'redux-data-fx'

const reducer = combinerReducers({
  reducer1: reducer1,
  ...
});

const store = createStore(reducer, reduxDataFx);
```

### ```store.replaceReducer```

If you want to replace some reducers (for lazyloading), you should use the new function ```store.replaceEffectfulReducer``` from your store.

### Testing

You can keep testing your reducers the same way but when they return some effect descriptions you have now the ability to make sure these are right too. 

As described before, the function ```fx(newState, effects)``` only creates an object with two fields: 
- state: the new state of your app
- effects: your effects

Those are only data, so it's quite easy for you to test both of them.

Then you can test your effect handlers separately, to verify they run the side effects as expected given the right inputs.

#### TODO: Default FX

Create some default effect handlers like: 
- fetch
- localStorage
- sessionStorage
- dispatchLater
- dispatch