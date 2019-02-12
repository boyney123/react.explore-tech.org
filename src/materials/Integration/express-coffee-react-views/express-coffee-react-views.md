---
path: '/materials/express-coffee-react-views'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'express-coffee-react-views'
  url: 'https://github.com/duereg/express-coffee-react-views'
  github_url: 'https://github.com/duereg/express-coffee-react-views'
  subscribers_count: '0'
  stargazers_count: '4'
  tags: ['']
  subtitle: 'An Express view engine which renders React components written in Coffee-JSX or Harmony-JSX on the server.'
  clone_url: 'https://github.com/duereg/express-coffee-react-views.git'
  ssh_url: 'git@github.com:duereg/express-coffee-react-views.git'
  pushed_at: '2014-12-03T22:23:50Z'
  updated_at: '2017-01-21T11:30:50Z'
  author:
    name: 'duereg'
    avatar: 'https://avatars2.githubusercontent.com/u/325737?v=4'
    github_url: 'https://github.com/duereg'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# express-coffee-react-views

This is an [Express][express] view engine which renders [React][react] components written in [CoffeeScript][coffee] or JSX-Harmony on the server. It renders static markup and *does not* support mounting those views on the client.

This was derived from [express-react-views](https://github.com/reactjs/express-react-views)

This is intended to be used as a replacement for existing server-side view solutions, like [jade][jade], [ejs][ejs], or [handlebars][hbs].

## Usage

```sh
npm install express-coffee-react-views react
```

**Note:** You must explicitly install `react` as a dependency. `react` is a peer dependency here. This is to avoid issues that may come when using incompatible versions.

### Add it to your app.

```coffee
# app.coffee

app = express()

app.set 'view engine', 'cjsx'
app.engine 'cjsx', require('express-coffee-react-views').createEngine()
```

### Options

You can pass options in when creating your engine.

option | values | default
-------|--------|--------
`extension` | any file extension with leading `.` | `'.cjsx'`
`doctype` | any string that can be used as [a doctype](http://en.wikipedia.org/wiki/Document_type_declaration), this will be prepended to your document | `'<!DOCTYPE html>'`
`beautify` | `true`: beautify markup before outputting (note, this can affect rendering due to additional whitespace) | `false`

The defaults are sane, but just in case you want to change something, here's how it would look:

```coffee
options =  extension: '.csx'
app.engine 'cjsx', require('express-coffee-react-views').createEngine options
```


### Views

Your views should be node modules that export a React component. Let's assume you have this file in `views/index.cjsx`:

```coffee
# @cjsx React.DOM

HelloMessage = React.createClass
  render: ->
    <div>Hello {this.props.name}</div>

module.exports = HelloMessage
```

### Routes

Your routes would look identical to the default routes Express gives you out of the box.

```coffee
# app.coffee

app.get '/', require('./routes').index
```

```coffee
# routes/index.coffee

exports.index = (req, res) ->
  res.render 'index', { name: 'John' }
```

**That's it!** Layouts follow really naturally from the idea of composition.

### Layouts

Simply pass the relevant props to a layout component.

`views/layouts/default.cjsx`:
```coffee
# @cjsx React.DOM

DefaultLayout = React.createClass
  render: ->
    <html>
      <head><title>{this.props.title}</title></head>
      <body>{this.props.children}</body>
    </html>

module.exports = DefaultLayout
```

`views/index.cjsx`:
```coffee
# @cjsx React.DOM

DefaultLayout = require './layouts/default'

HelloMessage = React.createClass
  render: ->
    <DefaultLayout title={this.props.title}>
      <div>Hello {this.props.name}</div>
    </DefaultLayout>

module.exports = HelloMessage
```

## Questions

### What about partials & includes?

These ideas don't really apply. But since they are familiar ideas to people coming from more traditional 'templating' solutions, let's address it. Most of these can be solved by packaging up another component that encapsulates that piece of functionality.

### What about view helpers?

I know you're used to registering helpers with your view helper (`hbs.registerHelper('something', ...))`) and operating on strings. But you don't need to do that here.

* Many helpers can be turned into components. Then you can just require and use them in your view.
* You have access to everything else in CoffeeScript. If you want to do some date formatting, you can `require('moment')` and use directly in your view. You can bundle up other helpers as you please.

### Where does my data come from?

All 'locals' are exposed to your view in `this.props`. These should work identically to other view engines.

Using `this.props` follows the pattern of passing data into a React component, which is why we do it that way.

Remember, as with other engines, rendering is synchronous. If you have database access or other async operations, they should be done in your routes.

## Caveats

* I'm saying it again to avoid confusion: this does not do anything with React in the browser. This is *only* a solution for server-side rendering.
* This uses `require` to access your views. This means that the plugin caches the contents for the lifetime of the server process. You need to restart your server when making changes to your views. **In development, we clear your view files from the cache so you can refresh your browser to see changes.**
* React & JSX have their own rendering caveats. For example, inline `<script>`s and `<style>`s will need to use `dangerouslySetInnerHTML={{__html: 'script content'}}`.

```coffee
<script dangerouslySetInnerHTML={{__html: '''
  # google analtyics
  # is a common use
'''}} />
```

* It's not possible to specify a doctype in JSX. You can override the default HTML5 doctype in the options.

[express]: http://expressjs.com/
[react]: http://facebook.github.io/react/
[jade]: http://jade-lang.com/
[ejs]: http://embeddedjs.com/
[hbs]: https://github.com/barc/express-hbs
[coffee]: http://coffeescript.org/
