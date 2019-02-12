---
path: '/materials/react-mvc'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-mvc'
  url: 'https://github.com/ustun/react-mvc'
  github_url: 'https://github.com/ustun/react-mvc'
  subscribers_count: '3'
  stargazers_count: '43'
  tags: ['']
  subtitle: 'React + MVC = Happy Developers'
  clone_url: 'https://github.com/ustun/react-mvc.git'
  ssh_url: 'git@github.com:ustun/react-mvc.git'
  pushed_at: '2016-01-23T17:43:59Z'
  updated_at: '2019-01-27T20:04:48Z'
  author:
    name: 'ustun'
    avatar: 'https://avatars2.githubusercontent.com/u/94374?v=4'
    github_url: 'https://github.com/ustun'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# React + MVC

> “What is going on here? You’re sitting on a gold mine! Why aren’t you doing something with this technology? You could change the world!”
  Steve Jobs, on his visit to [Xerox PARC](https://en.wikipedia.org/wiki/PARC_(company))

# ReactMVC example with ReactJS

MVC, invented at Xerox PARC, is the time and battle-tested pattern for building user interfaces. This project aims to show how the MVC pattern can be used with Facebook's React easily, without resorting to alternative tech like Flux or Redux.


This project implements an example chat application with ReactMVC architecture. It demonstrates how a complex, stateful application should be built.

![demo](https://cloud.githubusercontent.com/assets/698308/9188378/41976688-3fe4-11e5-940d-e555f666b294.gif)

## Install

```
$ git clone https://github.com/ustun/react-mvc.git
$ cd react-mvc
$ npm install
```

Make sure you have gulp installed:
```
$ sudo npm install -g gulp
```

Now you are ready to run the project. After you execute this command, the project will start automatically on your browser.
```
$ gulp
```

## Development

This project provides a development web server that listens on port 1970 -like the good old days- .

Run the default task via `gulp` and the project will be ready for development and inspection. Source files are symlinked, and the server watches for file changes with live reloading, so any change you make to the files under `src` folder will cause an automatic reload.

## Production builds

When you are satisfied with development and want to make a production build in order to deploy the app, just run the `bundle` task via `gulp bundle`. This compiles your source code with Closure Compiler in advanced mode and concats and minifies your CSS files producing one file for all your JavaScript codes and one CSS file for all your styles. This task then suffixes these files to evade browser caches. Finally, it minifies the output HTML.

The live-reloading watch server can also be activated for these kind of builds via `gulp serve`.

Happy coding!


## Credits

All the code was originally written in 'Vieux' MVC architecture by [Tarik Akyol](https://github.com/tarikakyol).

The original repo is at https://github.com/vieuxio/example-chat-react

Converted to standard MVC naming by [Ustun Ozgur](https://github.com/ustun).

For the original info about vieux architecture, see http://vieux.io/
