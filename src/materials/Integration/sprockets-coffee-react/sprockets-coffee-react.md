---
path: '/materials/sprockets-coffee-react'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'sprockets-coffee-react'
  url: 'https://github.com/jsdf/sprockets-coffee-react'
  github_url: 'https://github.com/jsdf/sprockets-coffee-react'
  subscribers_count: '1'
  stargazers_count: '84'
  tags: ['']
  subtitle: 'DEPRECATED – Sprockets preprocessor for CJSX (Coffeescript with React JSX markup)'
  clone_url: 'https://github.com/jsdf/sprockets-coffee-react.git'
  ssh_url: 'git@github.com:jsdf/sprockets-coffee-react.git'
  pushed_at: '2016-10-03T07:22:26Z'
  updated_at: '2018-11-01T14:11:24Z'
  author:
    name: 'jsdf'
    avatar: 'https://avatars0.githubusercontent.com/u/1232587?v=4'
    github_url: 'https://github.com/jsdf'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
= sprockets-coffee-react

= STATUS: DEPRECATED

This tool is no longer maintained. If you need to transition your codebase from
it, a codemod is available to do so: {cjsx-codemod}[https://github.com/jsdf/cjsx-codemod]

This project started as a way for me to explore how JSX could fit into
Coffeescript syntax, as a quickly hacked together prototype. While I never
really promoted it, it quickly took on a life of its own, and before long people
were asking for it to support all kinds of different use cases. On top of that I
had no experience writing parsers, so the result is something with 
{insurmountable limitations}[https://github.com/jsdf/coffee-react/issues/32].

As I eventually stopped using Coffeescript I ended up neglecting this project,
but as people were using it I didn't want to kill it. I really should have,
however, because it meant that people were using a crappy, ill-conceived,
unmaintained tool. Now, long overdue, I'm putting it out to pasture.

Original readme follows:

== Compatibility
sprockets-coffee-react 2.x is compatible with react ^0.12.0

sprockets-coffee-react 0.x is compatible with react <=0.11.0

== How to use

Add this to your Gemfile:

  gem 'sprockets-coffee-react'

Place a <tt>.js.coffee.cjsx</tt> or <tt>.js.cjsx</tt> file, or a <tt>.js.coffee</tt> 
file in your assets directory. When you require it into other JS files the CJSX
markup will be transformed and compiled to Javascript.

Eg. if you have a file called <tt>my-component.js.coffee</tt> which contains 
some CJSX code, require it from <tt>application.js</tt> or somewhere else:

  //= require my-component

== How to use with a Rack application

If you're not using rails, you'll need to register the Sprockets preprocessor manually. Here is an 
adapted version of the Rack example provided by Sprockets, which additionally requires and registers 
the sprockets-coffee-react engine:

  require 'sprockets'
  require 'sprockets/coffee-react'
  map '/assets' do
    environment = Sprockets::Environment.new
    environment.append_path 'app/assets/javascripts'
    environment.append_path 'app/assets/stylesheets'
    environment.register_preprocessor 'application/javascript', Sprockets::CoffeeReact
    environment.register_engine '.cjsx', Sprockets::CoffeeReactScript
    environment.register_engine '.js.cjsx', Sprockets::CoffeeReactScript
    run environment
  end

  map '/' do
    run YourRackApp
  end

== License

Released under the MIT License.  See the LICENSE file for further details.

== How to use with Middleman

Add the following to your config.rb file:

  require 'sprockets/coffee-react'

  ::Sprockets.register_preprocessor 'application/javascript', ::Sprockets::CoffeeReact
  ::Sprockets.register_engine '.cjsx', ::Sprockets::CoffeeReactScript
  ::Sprockets.register_engine '.js.cjsx', ::Sprockets::CoffeeReactScript
  
  


