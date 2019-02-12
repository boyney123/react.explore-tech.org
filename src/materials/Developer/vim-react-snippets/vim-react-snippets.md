---
path: '/materials/vim-react-snippets'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'vim-react-snippets'
  url: 'https://github.com/justinj/vim-react-snippets'
  github_url: 'https://github.com/justinj/vim-react-snippets'
  subscribers_count: '6'
  stargazers_count: '126'
  tags: ['']
  subtitle: 'Vim version of the snippets from jgebhardt/sublime-react'
  clone_url: 'https://github.com/justinj/vim-react-snippets.git'
  ssh_url: 'git@github.com:justinj/vim-react-snippets.git'
  pushed_at: '2017-02-20T18:57:30Z'
  updated_at: '2018-11-16T16:43:37Z'
  author:
    name: 'justinj'
    avatar: 'https://avatars2.githubusercontent.com/u/409075?v=4'
    github_url: 'https://github.com/justinj'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
vim-react-snippets
==================

A set of snippets for Vim to work with Facebook's
[React](http://facebook.github.io/react/) library. This fork change the snippet
syntax to ES6. Remove semicolon and comma. I also remove snippets related to
[react-classset](https://github.com/petehunt/react-classset) as it is deprecated now.

Require [UltiSnips](https://github.com/SirVer/ultisnips).
I only update the `UltiSnips` version. Pull requests for
[vim-snipmate](https://github.com/garbas/vim-snipmate) version are welcome.


Installation
============

Use your preferred Vim plugin installation method. For me, I like
[vim-plug](https://github.com/junegunn/vim-plug). If you also using `vim-plug`,
put the following into your `.vimrc`.

````vimrc
Plug 'SirVer/ultisnips'

' Currently, es6 version of snippets is available in es6 branch only
Plug 'letientai299/vim-react-snippets', { 'branch': 'es6' }

Plug 'honza/vim-snippets' 'optional
````

Usage
=====

Within any Javascript or JSX file, you should be able to do the following:

(in insert mode)
```
gdp<Tab>
```

expanding to

```
getDefaultProps() {
    return {

    };
},
```

Another example:

```
rcx<Tab>
```

Expanding to

```
class ClassName extends React.Component {
  render(){
    return (

    )
  }
}
```

And a bunch of others!

Check `./UltiSnips/javascript.snippets` to see the full list.
