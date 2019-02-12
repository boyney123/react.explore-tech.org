---
path: '/materials/babel-sublime-snippets'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'babel-sublime-snippets'
  url: 'https://babeljs.io'
  github_url: 'https://github.com/babel/babel-sublime-snippets'
  subscribers_count: '20'
  stargazers_count: '258'
  tags: ['']
  subtitle: 'Next generation JavaScript and React snippets for Sublime'
  clone_url: 'https://github.com/babel/babel-sublime-snippets.git'
  ssh_url: 'git@github.com:babel/babel-sublime-snippets.git'
  pushed_at: '2018-10-30T03:59:32Z'
  updated_at: '2019-02-09T18:50:41Z'
  author:
    name: 'babel'
    avatar: 'https://avatars1.githubusercontent.com/u/9637642?v=4'
    github_url: 'https://github.com/babel'
  latestRelease:
    tag_name: 'v1.0.7'
    name: 'v1.0.7'
    url: 'https://github.com/babel/babel-sublime-snippets/releases/tag/v1.0.7'
    created_at: '2018-02-26T10:25:39Z'
---
# babel-sublime-snippets

Sublime snippets for [React](http://facebook.github.io/react/docs/component-specs.html) in ES5 and [ES6](http://kangax.github.io/compat-table/es6/) flavors.

## Installation

Find it as [**Babel Snippets**](https://packagecontrol.io/packages/Babel%20Snippets) through [Package Control](https://packagecontrol.io/).

## Using the 'React: wrap in a component' snippet

First, select a block of JSX. Then, from the Command Palette select 'React: wrap in a component'. Or, you can set up a key binding.

To set a key binding, go to 'Preferences: Key Bindings - User' from the Command Palette and add an entry like this:

```json
{
  'keys': ['ctrl+shift+,'],
  'command': 'insert_snippet',
  'args': {
    'name': 'Packages/Babel Snippets/react_wrap.sublime-snippet'
  }
}
```

## Available snippets

### React

| Trigger  | Content |
| -------: | ------- |
| `rcc→`   | class component skeleton |
| `rcc→`   | legacy component skeleton |
| `cdm→`   | `componentDidMount() {…}` |
| `cdup→`  | `componentDidUpdate(prevProps, prevState) {…}` |
| `cwm→`   | `componentWillMount() {…}` |
| `cwr→`   | `componentWillReceiveProps(nextProps) {…}` |
| `cwun→`  | `componentWillUnmount() {…}` |
| `cwup→`  | `componentWillUpdate(nextProps, nextState) {…}` |
| `fdn→`   | `React.findDOMNode(…)` |
| `gdp→`   | `getDefaultProps() {…}` |
| `gis→`   | `getInitialState() {…}` |
| `ren→`   | `render() {…}` |
| `sst→`   | `this.setState(…)` |
| `scu→`   | `shouldComponentUpdate(nextProps, nextState) {…}` |
| `props→` | `this.props` |
| `state→` | `this.state` |
| `pt→`    | `propTypes { ... }` |
| `pta→`   | `PropTypes.arrayOf` |
| `ptai→`  | `PropTypes.arrayOf (Instances)` |
| `ptb→`   | `PropTypes.bool` |
| `pte→`   | `PropTypes.element` |
| `ptf→`   | `PropTypes.func` |
| `pti→`   | `PropTypes.instanceOf` |
| `ptn→`   | `PropTypes.number` |
| `ptn→`   | `PropTypes.node` |
| `pto→`   | `PropTypes.object` |
| `ptof→`  | `PropTypes.oneOf (Enum)` |
| `ptof→`  | `PropTypes.objectOf` |
| `ptoft→` | `PropTypes.oneOfType (Union)` |
| `pts→`   | `PropTypes.string` |
| `ptsp→`  | `PropTypes.shape` |

## Notes

  * Unsupported React API snippets: `displayName`, `forceUpdate`, `getDOMNode` (use `React.findDOMNode`), `ismounted`, `mixins`, `replaceProps`, `replaceState`, `setProps`, `statics`.

## Snippet(ing)

Read [Extending Sublime Text » Snippets](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/extensibility/snippets.html).
