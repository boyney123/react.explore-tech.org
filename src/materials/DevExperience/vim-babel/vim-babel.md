---
path: '/materials/vim-babel'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'vim-babel'
  url: 'https://github.com/jbgutierrez/vim-babel'
  github_url: 'https://github.com/jbgutierrez/vim-babel'
  subscribers_count: '2'
  stargazers_count: '50'
  tags: ['']
  subtitle: 'Wrapper around babel.js (ES2015, React, ...)'
  clone_url: 'https://github.com/jbgutierrez/vim-babel.git'
  ssh_url: 'git@github.com:jbgutierrez/vim-babel.git'
  pushed_at: '2016-03-15T23:06:50Z'
  updated_at: '2018-11-22T07:04:28Z'
  author:
    name: 'jbgutierrez'
    avatar: 'https://avatars0.githubusercontent.com/u/24221?v=4'
    github_url: 'https://github.com/jbgutierrez'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
## vim-babel

Babel shows how the current file or a snippet of Javascript will
be transformed by [Babel][Babel].

    :[RANGE] Babel [vert[ical]] [WINDOW-SIZE]

Calling `:Babel` without a range compiles the whole file:

  ![Buffer](https://cloud.githubusercontent.com/assets/24221/11776848/937fc620-a24a-11e5-88b6-cac74ef02be3.gif)

Calling it with a range, like in visual mode, compiles only the selected
snippet:

  ![Snippet](https://cloud.githubusercontent.com/assets/24221/11776849/9395bfa2-a24a-11e5-9db5-a87524e98eae.gif)

Each file gets its own Babel buffer, and the same buffer is used for all
future calls of `:Babel` on that file. It can be quickly closed by
hitting `q` in normal mode.

Using `vert` opens the Babel buffer vertically instead of horizontally

    :Babel vert

By default the Babel buffer splits the source buffer in half, but this
can be overridden by passing in a `WINDOW-SIZE`:

    :Babel 4

#### Quick syntax checking

If compiling a snippet results in a compiler error, Babel adds that
error to the [quickfix] list.

[quickfix]: http://vimdoc.sourceforge.net/htmldoc/quickfix.html#quickfix

  ![Syntax Checking](https://cloud.githubusercontent.com/assets/24221/11776850/939f8942-a24a-11e5-8dfe-9e8e35ee2413.gif)

You can use this to quickly check the syntax of a snippet.

> **Note:**
> Did you find this plugin useful? Please star it and
> [share](https://twitter.com/intent/tweet?text=%23ES2015%20today!%20Preview%20how%20%23babeljs%20transforms%20your%20code%20with%20this%20%23vim%20plugin%20by%20@jbgutierrez%20https://github.com/jbgutierrez/vim-babel)
> with others.

## About the `babel` invocation

Out of the box [Babel][Babel] doesn't do anything. In order to actually do
anything to your code you need to enable plugins and set some presets. This
vim plugin looks for the existence of a `.babelrc` in the directory of the open
buffer and in every parent directory. If found, it will set that directory
and presets as arguments to `babel-cli`. Otherwise, it will just invoke
`babel-cli` with no options whatsoever.

## Installation

### Plugin managers

The most common plugin managers include [vim-plug][vim-plug],
[NeoBundle][neobundle], [Vundle][vundle] and [pathogen.vim][pathogen].

With pathogen.vim, just clone this repository inside `~/.vim/bundle`:

```bash
git clone https://github.com/jbgutierrez/vim-babel.git ~/.vim/bundle/vim-babel
git clone https://github.com/mattn/webapi-vim.git ~/.vim/bundle/webapi-vim
```

With the other plugin managers, just follow the instructions on the homepage of each plugin. In general, you just have to add a line to your `~/.vimrc`:

```viml
' vim-plug
Plug 'jbgutierrez/vim-babel'
Plug 'mattn/webapi-vim'
' NeoBundle
NeoBundle 'jbgutierrez/vim-babel'
NeoBundle 'mattn/webapi-vim'
' Vundle
Plugin 'jbgutierrez/vim-babel'
Plugin 'mattn/webapi-vim'
```

### Manual installation

Copy the contents of each directory in the respective directories inside
`~/.vim`.

You need to install webapi-vim also:

  http://www.vim.org/scripts/script.php?script_id=4019

If you want to use latest one:

  https://github.com/mattn/webapi-vim

## Bugs

Please report any bugs you may find on the GitHub [issue tracker](http://github.com/jbgutierrez/vim-babel/issues).

## Contributing

Think you can make [VimBabel][VimBabel] better? Great!, contributions are always welcome.

Fork the [project][VimBabel] on GitHub and send a pull request.

## Credits
I've borrow the core idea from the amazing [vim-coffee-script][vim-coffee-script] plugin.

## License

VimBabel is licensed under the MIT license.
See http://opensource.org/licenses/MIT

Happy hacking!

[vim-plug]: https://github.com/junegunn/vim-plug
[vundle]: https://github.com/gmarik/Vundle.vim
[neobundle]: https://github.com/Shougo/neobundle.vim
[pathogen]: https://github.com/tpope/vim-pathogen
[vim-coffee-script]: https://github.com/kchmck/vim-coffee-script
[Babel]: http://babeljs.io/
[VimBabel]: http://github.com/jbgutierrez/vim-babel
