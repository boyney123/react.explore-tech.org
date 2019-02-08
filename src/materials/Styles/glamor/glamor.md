---
path: '/materials/glamor'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'glamor'
  url: 'https://github.com/threepointone/glamor'
  github_url: 'https://github.com/threepointone/glamor'
  subscribers_count: '57'
  stargazers_count: '3421'
  tags: ['']
  subtitle: 'inline css for react et al'
  clone_url: 'https://github.com/threepointone/glamor.git'
  ssh_url: 'git@github.com:threepointone/glamor.git'
  pushed_at: '2018-08-26T00:26:21Z'
  updated_at: '2019-02-08T07:27:47Z'
  author:
    name: 'threepointone'
    avatar: 'https://avatars2.githubusercontent.com/u/18808?v=4'
    github_url: 'https://github.com/threepointone'
  latestRelease:
    tag_name: 'v2.20.14'
    name: ''
    url: 'https://github.com/threepointone/glamor/releases/tag/v2.20.14'
    created_at: '2016-12-27T13:39:30Z'
---
# glamor

[![Join the chat at https://gitter.im/glamor-css/Lobby](https://badges.gitter.im/glamor-css/Lobby.svg)](https://gitter.im/glamor-css/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![build status](https://travis-ci.org/threepointone/glamor.svg)

css in your javascript

`npm install glamor --save`

usage
```jsx
import { css } from 'glamor'

// make css rules
let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

// add as data attributes
<div {...rule} {...another}>
  zomg
</div>

// or as classes
<div className={`${rule} ${another}`}>
  zomg
</div>

// merge rules for great justice
let mono = css({
  fontFamily: 'monospace'
})

let bolder = css({
  fontWeight: 'bolder'
})

<div {...css(mono, bolder)}>
  bold code!
</div>

```

motivation
---

This expands on ideas from @vjeux's [2014 css-in-js talk](https://speakerdeck.com/vjeux/react-css-in-js).
We introduce an api to annotate arbitrary dom nodes with style definitions ('rules') for, um, the greater good.

features
---

- fast / efficient, with a fluent api
- framework independent
- adds vendor prefixes / fallback values
- supports all the pseudo :classes/::elements
- `@media` queries
- `@supports` statements
- `@font-face` / `@keyframes`
- escape hatches for parent / child / contextual selectors
- dev helper to simulate pseudo classes like `:hover`, etc
- server side / static rendering
- tests / coverage
- experimental - [write real css](https://github.com/threepointone/glamor/blob/master/docs/css.md), with syntax highlighting and linting


(thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to run our build in real browsers.)

docs
---
- [api documentation](https://github.com/threepointone/glamor/blob/master/docs/api.md)
- [howto](https://github.com/threepointone/glamor/blob/master/docs/howto.md) - a comparison of css techniques in glamor
- [plugins](https://github.com/threepointone/glamor/blob/master/docs/plugins.md)
- [server side rendering](https://github.com/threepointone/glamor/blob/master/docs/server.md)
- [performance tips](https://github.com/threepointone/glamor/blob/master/docs/performance.md)
- [what happens when I call css(...rules)?](https://github.com/threepointone/glamor/blob/master/docs/implementation.md)

extras
---

- `glamor/reset` - include a css reset
- [use a `css` prop on *all* your react elements](https://github.com/threepointone/glamor/blob/master/docs/createElement.md)
- `glamor/react` - helpers for [themes](https://github.com/threepointone/glamor/blob/master/docs/themes.md), [`@vars`](https://github.com/threepointone/glamor/blob/master/docs/vars.md)
- `glamor/jsxstyle` - [react integration](https://github.com/threepointone/glamor/blob/master/docs/jsxstyle.md), à la [jsxstyle](https://github.com/petehunt/jsxstyle/)
- `glamor/aphrodite` - [shim](https://github.com/threepointone/glamor/blob/master/docs/aphrodite.md) for [aphrodite](https://github.com/Khan/aphrodite) stylesheets
- `glamor/utils` - a port of [postcss-utilities](https://github.com/ismamz/postcss-utilities)
- `glamor/ous` - a port of [the skeleton css framework](http://getskeleton.com)
- [`glamor/styled`](https://github.com/threepointone/glamor/blob/master/docs/styled.md) - an experimental port of [styled-components](https://styled-components.com/)


speedy mode
---

there are two methods by which the library adds styles to the document -
- by appending css 'rules' to a browser backed stylesheet. This is really fast, but has the disadvantage of making the styles uneditable in the devtools sidebar.
- by appending text nodes to a style tag. This is fairly slow, but doesn't have the editing drawback.

as a compromise, we enable the former 'speedy' mode `NODE_ENV=production`, and disable it otherwise. You can manually toggle this with the `speedy()` function.

characteristics
---

while glamor shares most common attributes of other inline style / css-in-js systems,
here are some key differences -

- uses 'real' stylesheets, so you can use all css features.
- rules can be used as data-attributes or classNames.
- simulate pseudo-classes with the `simulate` helper. very useful, especially when combined when hot-loading and/or editing directly in devtools.
- really fast, by way of deduping rules, and using [insertRule](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule) in production.


todo
---

- redo all the docs
- [planned enhancements](https://github.com/threepointone/glamor/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)
- notes on composition

profit, profit
---

I get it
