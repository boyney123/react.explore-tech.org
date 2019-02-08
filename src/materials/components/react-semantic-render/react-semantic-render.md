---
path: '/materials/react-semantic-render'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-semantic-render'
  url: 'https://www.npmjs.com/package/react-semantic-render'
  github_url: 'https://github.com/csvenke/react-semantic-render'
  subscribers_count: '2'
  stargazers_count: '8'
  tags: ['conditional','helpers','react','react-component-library','react-components','react-library','react-utils','render','semantic','utils']
  subtitle: 'Semantic helper components for rendering content with React.'
  clone_url: 'https://github.com/csvenke/react-semantic-render.git'
  ssh_url: 'git@github.com:csvenke/react-semantic-render.git'
  pushed_at: '2019-02-06T22:25:10Z'
  updated_at: '2018-12-05T19:41:54Z'
  author:
    name: 'csvenke'
    avatar: 'https://avatars3.githubusercontent.com/u/9643219?v=4'
    github_url: 'https://github.com/csvenke'
  latestRelease:
    tag_name: 'v4.0.0'
    name: 'v4.0.0'
    url: 'https://github.com/csvenke/react-semantic-render/releases/tag/v4.0.0'
    created_at: '2018-12-05T19:25:09Z'
---
<h1 align='center'>react-semantic-render</h1>

<h4 align='center'>Semantic helper components for rendering content with <a href='https://reactjs.org/' target='_blank'>React</a>.</h4>

<p align='center'>
  <a href='https://www.npmjs.com/package/react-semantic-render'>
    <img src='https://badgen.net/npm/v/react-semantic-render' alt='npm package' />
  </a>
  <a href='https://bundlephobia.com/result?p=react-semantic-render'>
    <img src='https://badgen.net/bundlephobia/min/react-semantic-render' alt='min bundle size' />
  </a>
  <a href='https://travis-ci.com/csvenke/react-semantic-render'>
    <img src='https://badgen.net/travis/csvenke/react-semantic-render' alt='travis ci build status' />
  </a>
  <a href='https://coveralls.io/github/csvenke/react-semantic-render?branch=master'>
    <img src='https://badgen.net/coveralls/c/github/csvenke/react-semantic-render' alt='coverage status' />
  </a>
  <a href='https://greenkeeper.io/'>
    <img src='https://badges.greenkeeper.io/csvenke/react-semantic-render.svg' alt='greenkeeper' />
  </a>
</p>

<p align='center'>
  <a href='#install'>Install</a> •
  <a href='#usage'>Usage</a> •
  <a href='#why'>Why</a> •
  <a href='#development'>Development</a> •
  <a href='#contributing'>Contributing</a> •
  <a href='#license'>License</a>
</p>

## Install

Using npm:

```bash
$ npm install --save react-semantic-render
```

Using yarn:

```bash
$ yarn add react-semantic-render
```

## Usage

### Show

Renders content if `when` equals true.

| Property  | Type  | Description |
|---|---|---|
| `when`   | boolean  | Conditional statement |
| `render`  | function  | Shorthand for primary content |
| `children`   | node  | Primary content |

```jsx
import { Show } from 'react-semantic-render';

<Show when={true}>
  <button>click me!</button>
</Show>
```
Use the render prop when you dont want your content evaluated unless a condition is true

```jsx
import { Show } from 'react-semantic-render'

<Show 
  when={!!label}
  render={() => (
    <button>{label}</button>
  )}
/>
```

### List

Renders content from specified callback function from either `render` or `children` on each element of `items`.

| Property  | Type  | Description
|---|---|---|
| `items`   | any[]  | Array to map
| `render`  | function  | Shorthand for primary content
| `children`   | node  | Primary content

```jsx
import { List } from 'react-semantic-render'

<List items={['Jack', 'Jane', 'Joe']}>
  {name => (
    <span>{name}</span>
  )}
</List>
```

### Switch

Renders content from first `Switch.Case` that matches `value`, else `Switch.Default` if it exists.

| Property  | Type  | Description
|---|---|---|
| `value`   | boolean  | Conditional statement
| `children`   | node  | Primary content

```jsx
import { Switch } from 'react-semantic-render'

<Switch value={3}>
  <Switch.Case value={3}>
    <span>Render me!</span>
  </Switch.Case>
  <Switch.Default>
    <button>Click me!</button>
  </Switch.Default>
</Switch>
```

### ShowIfElse

Renders content from if when condition equals true, else renders content from else.

| Property  | Type  | Description
|---|---|---|
| `condition`   | boolean  | Conditional statement
| `if`  | function  | Renders when condition is true
| `else`   | function  | Renders when condition is false

```jsx
import { ShowIfElse } from 'react-semantic-render'

<ShowIfElse
  condition={true}
  if={() => (
    <button>Render me!</button>
  )}
  else={() => (
    <button>No, render me!</button>
  )}
/>
```

### Hideable

Higher order component that injects 'hide' prop into specified component.

| Property  | Type  | Description
|---|---|---|
| `hide`   | boolean  | Conditional statement

```jsx
import { Hideable } from 'react-semantic-render'
import { Button } from './components'

const HideableButton = Hideable(Button)

<HideableButton hide={true} label='Click me!' />
```

## Why

In the example below you see two very common use cases where you have to render something when a condition is true and render content from an array of data.
This is usually solved with inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

```jsx
const App = ({ isLoading, results }) => (
    {results.length > 0 ? (
      <ul>
        {result.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    ) : null}
);
```

Here you see how the component above could be rewritten with components from `react-semantic-render`.
While it is abit more verbose, the readability is greatly increased and you immeadiatly see whats going on.

```jsx
import { List, Switch } from 'react-semantic-render';

const App = ({ isLoading, results }) => (
  <Show when={results.length > 0}>
    <ul>
      <List items={results}>
        {user => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        )}
      </List>
    </ul>
  </Show>
);
```

The purpose of this library is to provide helpful semantic render components that makes the `React.Component` render method easier to read and follow.

Do you have an idea about a component you think belong here? [Tell us here!](https://github.com/csvenke/react-semantic-render/issues/new)

## Development

##### Install dependencies

```
$ npm install
```

##### Run tests

```
$ npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

#### Commit style guide

We use [conventional commits style](https://conventionalcommits.org/).
Read up on it before doing your first commit.
Don't worry about making mistakes, `commitlint` will stop you and you can try again.

## License

[MIT](https://github.com/csvenke/react-semantic-render/blob/master/LICENSE)
