---
path: '/materials/wow-realm-status-react'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'wow-realm-status-react'
  url: 'http://wow-realm-status-react.herokuapp.com/'
  github_url: 'https://github.com/BinaryMuse/wow-realm-status-react'
  subscribers_count: '1'
  stargazers_count: '2'
  tags: ['']
  subtitle: 'WoW Realm Status: React Edition'
  clone_url: 'https://github.com/BinaryMuse/wow-realm-status-react.git'
  ssh_url: 'git@github.com:BinaryMuse/wow-realm-status-react.git'
  pushed_at: '2014-02-22T07:36:47Z'
  updated_at: '2017-06-29T22:22:30Z'
  author:
    name: 'BinaryMuse'
    avatar: 'https://avatars0.githubusercontent.com/u/189606?v=4'
    github_url: 'https://github.com/BinaryMuse'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
WoW Realm Status Page: React Edition
====================================

This is a version of my [WoW Realm Status Page](https://github.com/BinaryMuse/wow-realm-status-js) implemented using [React](http://facebook.github.io/react/).

This is an isomorphic application; the same JavaScript code runs on the server and the client. See `server.js` and `client.js` for the two React render calls. All React components are in `app/client`.

You can `curl` any URL to see that the server correctly filters the realms based on the filter (e.g. `http://localhost:3000/nazj` will filter down the realms to ones that contain `nazj` in their name or slug).

Running
-------

With Node.js installed:

1. Install the dependencies: `npm install`
2. Rebuild the client bundle: `npm run build`
3. Run the server: `npm start`

You may specify a port to bind to by specifying a `PORT` environment variable, e.g. `PORT=8765 npm start`.

You may watch the application for changes and continuously rebuild the client bundle by running `npm run watch` instead of `npm run build`.

Versions of This Application
----------------------------

* Ruby - [source](https://github.com/BinaryMuse/wow-realm-status), [demo](http://wowstatus.info/)
* Backbone - [source](https://github.com/BinaryMuse/wow-realm-status-js), [demo](http://binarymuse.github.io/wow-realm-status-js/)
* AngularJS - [source](https://github.com/BinaryMuse/wow-realm-status-angular), [demo](http://binarymuse.github.io/wow-realm-status-angular/)
* React - [source](https://github.com/BinaryMuse/wow-realm-status-react), [demo](http://wow-realm-status-react.herokuapp.com/)
