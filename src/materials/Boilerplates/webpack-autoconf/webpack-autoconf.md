---
path: '/materials/webpack-autoconf'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'webpack-autoconf'
  url: 'https://webpack.jakoblind.no/'
  github_url: 'https://github.com/jakoblind/webpack-autoconf'
  subscribers_count: '13'
  stargazers_count: '279'
  tags: ['']
  subtitle: 'A tool to create webpack configs '
  clone_url: 'https://github.com/jakoblind/webpack-autoconf.git'
  ssh_url: 'git@github.com:jakoblind/webpack-autoconf.git'
  pushed_at: '2019-02-10T19:22:57Z'
  updated_at: '2019-02-07T03:32:15Z'
  author:
    name: 'jakoblind'
    avatar: 'https://avatars2.githubusercontent.com/u/399339?v=4'
    github_url: 'https://github.com/jakoblind'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# webpack autoconf

A tool to create personalized and optimized webpack.config.js. Creating a webpack project should be simple for everyone!

This tool is available both as CLI and as a online web tool.

Check out [this tool in action](https://webpack.jakoblind.no)

## CLI

Usage: webpack-autoconf new [project-name] [features]

Where [features] can be any combination of:
  - React
  - Vue
  - CSS
  - Sass
  - Less
  - stylus
  - SVG
  - PNG
  - moment
  - lodash

Example: webpack-autoconf new myProject React PNG

A complete project is created containing `webpack.config.js`, `package.json`, 'hello world' source files, and if required a `.babelrc`.

## Build CLI on your machine

```sh
npm run cli-build
```

Then you can run it with

```sh
node bin/webpack-autoconf.js
```

## Run web version locally

Make sure you use NPM 8 or later

```sh
npm install
gatsby develop
```

Point your browser to http://localhost:8000

## Contributing

If you have an idea for a new feature, please create an issue or participate in an existing issue. PRs are also very much welcome!
