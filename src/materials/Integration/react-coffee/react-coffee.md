---
path: '/materials/react-coffee'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-coffee'
  url: 'https://github.com/elucidata/react-coffee'
  github_url: 'https://github.com/elucidata/react-coffee'
  subscribers_count: '1'
  stargazers_count: '18'
  tags: ['']
  subtitle: 'Build React components using natural CoffeeScript syntax.'
  clone_url: 'https://github.com/elucidata/react-coffee.git'
  ssh_url: 'git@github.com:elucidata/react-coffee.git'
  pushed_at: '2017-12-05T17:28:18Z'
  updated_at: '2017-07-04T04:11:28Z'
  author:
    name: 'elucidata'
    avatar: 'https://avatars2.githubusercontent.com/u/3829373?v=4'
    github_url: 'https://github.com/elucidata'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# elucidata-react-coffee

Define React components using natural CoffeeScript syntax.

Example:

```coffeescript
{div}= React.DOM

class UserChip extends React.Component
  @staticMethod: -> # becomes a static method on the React Component
    'hello'

  render: ->
    (div null, 'Hello')

module.exports= UserChip.toComponent()
```

Alternate style:

```coffeescript
{div}= React.DOM

module.exports= React.Component.toComponent class MyComponent

  render: ->
    (div null,
      'My Component!'
    )
```

## Note

* You'll need to use the result of `.toComponent()` in React.
* When `.toComponent()` is called a new instance of the component is created.
  So you can use the constructor to fill any instance properties (specifically
  for ES6 classes). But don't do anything crazy in there. It's must ONLY be
  used for this purpose, as the constructor is discarded in the React component.

## Installation

For browserify:

    npm install elucidata-react-coffee --save

For bower:

    bower install elucidata-react-coffee --save


## Brunch

If you use [brunch](http://brunch.io), you should look into
the [react-tags-brunch](https://github.com/elucidata/react-tags-brunch)
plugin, it plays wonderfully with react-coffee! The plugin
interpolates `(@div ...)` kinds of calls into `React.DOM.div(...)`. 

Example:

```coffeescript
class Login extends React.Component

  render: ->
    (@div className:'box',
      (@header null,
        'Login'
      )
      (@section className:'body',
        (@form role:'form',
          # ... etc
        )
      )
      (@footer null,
        (@button onClick:@whatever, 'Login')
      )
    )

module.exports= Login.toComponent()
```

After it has been run through brunch, the output looks like this:

```javascript
var Login,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Login = (function(_super) {
  __extends(Login, _super);

  function Login() {
    return Login.__super__.constructor.apply(this, arguments);
  }

  Login.prototype.render = function() {
    return React.DOM.div({
      className: 'box'
    }, React.DOM.header(null, 'Login'), React.DOM.section({
      className: 'body'
    }, React.DOM.form({
      role: 'form'
    })), React.DOM.footer(null, React.DOM.button({
      onClick: this.whatever
    }, 'Login')));
  };

  return Login;

})(React.Component);

module.exports = Login.toComponent();
```

# JSX and ES6

If you are using JSX and enable the `--harmony` flag, you can use react-coffee
with ES6 classes as well:

```javascript
class Test extends React.Component {

  static message() {
    return 'Hello, mate.'
  }

  getInitialState() {
    return {
      hello: 'Howdy'
    }
  }

  render() {
    return (
      <div>
        You said: { this.type.message() }<br/>
        I said: { this.state.hello }
      </div>
    )
  }

}

module.exports= Test.toComponent()
```

## Todo

- Examples
- Tests

# License

The MIT License (MIT)

Copyright (c) 2014 Elucidata unLTD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
