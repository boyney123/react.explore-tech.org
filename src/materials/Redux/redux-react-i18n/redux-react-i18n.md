---
path: '/materials/redux-react-i18n'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'redux-react-i18n'
  url: 'https://derzunov.github.io/redux-react-i18n/'
  github_url: 'https://github.com/derzunov/redux-react-i18n'
  subscribers_count: '1'
  stargazers_count: '59'
  tags: ['arabic','belorusian','countries','czech','english','french','german','i18n','internationalization','l10n','localization','pluralization','pluralizer','polish','react','redux','russian','serbian','ukrainian']
  subtitle: 'An i18n solution for React/Redux and React Native projects'
  clone_url: 'https://github.com/derzunov/redux-react-i18n.git'
  ssh_url: 'git@github.com:derzunov/redux-react-i18n.git'
  pushed_at: '2018-05-29T13:33:12Z'
  updated_at: '2019-01-24T18:06:40Z'
  author:
    name: 'derzunov'
    avatar: 'https://avatars3.githubusercontent.com/u/4807337?v=4'
    github_url: 'https://github.com/derzunov'
  latestRelease:
    tag_name: 'v1.3.0'
    name: 'v1.3.0'
    url: 'https://github.com/derzunov/redux-react-i18n/releases/tag/v1.3.0'
    created_at: '2018-05-29T13:32:13Z'
---
# redux-react-i18n

[![Build Status](https://travis-ci.org/derzunov/redux-react-i18n.svg?branch=master)](https://travis-ci.org/derzunov/redux-react-i18n)
[![npm](https://img.shields.io/npm/dt/redux-react-i18n.svg)](https://www.npmjs.com/package/redux-react-i18n)
[![npm](https://img.shields.io/npm/v/redux-react-i18n.svg)](https://www.npmjs.com/package/redux-react-i18n)
[![Package Quality](http://npm.packagequality.com/shield/redux-react-i18n.svg)](http://packagequality.com/#?package=redux-react-i18n)

[![Package Quality](http://npm.packagequality.com/badge/redux-react-i18n.png)](http://packagequality.com/#?package=redux-react-i18n)

An i18n solution with plural forms support for Redux/React

## Workers of all countries, unite!

![Workers of all countries, unite!](https://raw.githubusercontent.com/derzunov/redux-react-i18n/master/i18n-logo.jpg 'Workers of all countries, unite!')

### Supported languages list with expected codes for pluralize mechanics switching
- Russian ( ru, ru-RU )
- English ( en, en-US, en-UK )
- French ( fr )
- German ( de )
- Polish ( pl )
- Czech ( cs )
- Portuguese ( pt )
- Brazilian Portuguese ( pt-BR, br )
- Arabic ( ar-AR, ar )
- Turkish ( tr )
- Occitan ( oc )
- Belarusian ( be )
- Bosnian ( bs )
- Croatian ( hr )
- Serbian ( sr )
- Ukrainian ( uk )
- ...

## Example Demo

[derzunov.github.io/redux-react-i18n](https://derzunov.github.io/redux-react-i18n/)

### What's in demo?
- webpack/gulp dev/prod build system
- languages:
   * English
   * Russian
   * Polish
   * French
   * Belarusian
   * ...
- language switcher component
- simple key demo
- key with pluralization demo

```
git clone https://github.com/derzunov/redux-react-i18n redux-react-i18n
cd redux-react-i18n/example
npm i
```
and then
```
gulp
```
or
```
gulp prod
```

## Short code demo

#### Write ( jsx ):
```jsx
<Loc locKey='your_key_1'/>
<Loc locKey='your_key_2' number={1}/>
<Loc locKey='your_key_2' number={2}/>
<Loc locKey='your_key_2' number={5}/>
```
#### Result ( html ):
```html
<span>Перевод вашего первого ключа из словаря для текущего языка</span>
<span>Пришла 1 кошечка</span>
<span>Пришли 2 кошечки</span>
<span>Пришло 5 кошечек</span>
```

### What am I using:
pluralizer: ( [github](https://github.com/derzunov/pluralizer) or [npm](https://www.npmjs.com/package/pluralizr) ) for plural forms changing

translator: ( [github](https://github.com/derzunov/translator) or [npm](https://www.npmjs.com/package/translatr) ) for translation ([translator demo](https://derzunov.github.io/translator/))

## Install:
Terminal:
```
npm i redux-react-i18n
```

## What's in the box

### Components:
 - Loc ( Container Component )
 - LocPresentational ( Presentational Component )

### Actions
 - setCurrentLanguage( languageCode )
 - setLanguages( languageCode )
 - addDictionary( languageCode, dictionary )
 - setDictionaries( dictionaries )

### Reducer
 - i18n


## Full code demo ( complete solution for Redux ):
```jsx
import { i18nReducer, i18nActions, Loc } from 'redux-react-i18n'

...
// 'reducers' contains your reducers
reducers.i18n = i18nReducer
...

const store = createStore( combineReducers( reducers ) )

...
// Set dictionaries (simpliest example) -----------------------------------------------------------------------------------------------

// This dictionaries can be supported by Localization team without need to know somth about interface or project,
// and you just can fetch it to your project
const dictionaries = {
    'ru-RU': {
        'key_1': 'Первый дефолтный ключ',
        'key_2': [ '$Count', ' ', ['штучка','штучки','штучек']], // 1 штучка, 3 штучки, пять штучек
        'key_3': {
            'nested_1': 'Первый вложенный ключ',
            'nested_2': 'Второй вложенный ключ',
        },
        /* ... */
        /* Other keys */
    },
    'en-US': {
        'key_1': 'First default key',
        'key_2': [ '$Count', ' ', ['thing','things']], // 1 thing, 2 things, 153 things
        'key_3': {
            'nested_1': 'First nested key',
            'nested_2': 'Second nested key',
        },
    }
    /* ... */
    /* Other dictionaries */
}
store.dispatch( i18nActions.setDictionaries( dictionaries ) )
// / Set dictionaries (simpliest example) ---------------------------------------------------------------------------------------------

// Set languages (simpliest example) --------------------------------------------------------------------------------------------------
const languages = [
    {
        code: 'ru-RU',
        name: 'Русский'
    },
    {
        code: 'en-US',
        name: 'English (USA)'
    }
    /* ... */
    /* Other languages */
]

store.dispatch( i18nActions.setLanguages( languages ) )
// / Set languages (simpliest example) ------------------------------------------------------------------------------------------------

// Set current language code (you can map this action to select component or somth like this)
store.dispatch( i18nActions.setCurrentLanguage( 'ru-RU' ) )
```

#### And now you can use 'Loc' container component

```jsx
import { Loc } from 'redux-react-i18n'
...

<p>
  <Loc locKey='key_1'/> // => Первый дефолтный ключ
</p>

<p>
  <Loc locKey='key_2' number={7}/> // => 7 штучек
</p>

<p>
  <Loc locKey='key_3.nested_1'/> // => Первый вложенный ключ
</p>
<p>
  <Loc locKey='key_3.nested_2'/> // => Второй вложенный ключ
</p>
```

## If you don't want to use a complete solution:

#### Just use a dumb component and you can design store/actions/reducers by yourself like you want

```jsx
// Just import presentational component LocPresentational
import { LocPresentational } from 'redux-react-i18n'
...
...
...
// Then map data to props => currentLanguage, dictionary (See more in src/Loc.js):
const mapStateToProps = ( { /*getting data from the state*/ }, ownProps ) => ({
    currentLanguage: yourCurrentLanguageFromState,
    dictionary: yourDictionaryFromState
});
Loc = connect( mapStateToProps )( LocPresentational )
...
...
...
<p>
  <Loc locKey='YOUR_KEY_1'/>
</p>

<p>
  <Loc locKey='YOUR_KEY_2'  number={42}/>
</p>
```
See more in src/\*.js


## Using with React Native

[redux-react-native-i18n](https://github.com/derzunov/redux-react-native-i18n)

## The 'Span Problem'

If the span tag is a big problem (in 'option' tag for example), you can use **translate** from 'translatr' like this

```
import translate from 'translatr'
...
...
...
<select>
   <option value='1'>
      { translate( dictionary, currentLanguage, key, number ) }
   </option>
</select>
...
```

and just a simple example of **mapStateToProps** as a bonus:

```
const mapStateToProps = ( {i18n: { currentLanguage, dictionaries }}, ownProps ) => ({
    currentLanguage: currentLanguage,
    dictionary: dictionaries[ currentLanguage ]
});
```

#### Why?

With ```<Loc locKey='your_key' ></Loc>``` you'll get:

```
<select>
  <option> <span>Translated Text</span> </option>
</select>
```


With ```translate``` you'll get:
```
<select>
  <option> Translated Text </option>
</select>
```
... but you'll have to write extra code

PS You already have [translatr](https://github.com/derzunov/translator) as a dependency of redux-react-i18n in your node_modules
