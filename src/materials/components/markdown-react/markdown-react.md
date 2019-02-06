---
path: '/materials/markdown-react'
title: 'markdown-react'
url: 'https://github.com/vjeux/markdown-react'
github_url: 'https://github.com/vjeux/markdown-react'
subscribers_count: '1'
stargazers_count: '53'
img: './screenshot.png'
tags: []
subtitle: 'React Render for Standard Markdown'
clone_url: 'https://github.com/vjeux/markdown-react.git'
ssh_url: 'git@github.com:vjeux/markdown-react.git'
pushed_at: '2014-09-03T21:03:35Z'
updated_at: '2018-04-17T14:15:50Z'
author:
  name: 'vjeux'
  avatar: 'https://avatars0.githubusercontent.com/u/197597?v=4'
  github_url: 'https://github.com/vjeux'
latestRelease:
  tag_name: null
  name: null
  url: null
  created_at: null
---

![alt text](screenshot.png)

markdown-react
==============

React Render for Standard Markdown

```javascript
/** @jsx React.DOM */
var parser = new stmd.DocParser();
var renderer = new stmdReact.ReactRenderer();

React.renderComponent(
  <div>{renderer.render(parser.parse('Hello *world*'))}</div>,
  document.body
);
```


Demo: http://vjeux.github.io/markdown-react/

        