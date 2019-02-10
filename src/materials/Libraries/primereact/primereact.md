---
path: '/materials/primereact'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'primereact'
  url: 'https://www.primefaces.org/primereact/#/'
  github_url: 'https://github.com/primefaces/primereact'
  subscribers_count: '48'
  stargazers_count: '806'
  tags: ['bootstrap','charts','datagrid','datatable','grid','material','native-calendar-component','primereact','react','react-components','tree','treetable','ui-components']
  subtitle: 'PrimeReact is a collection of rich UI components for React'
  clone_url: 'https://github.com/primefaces/primereact.git'
  ssh_url: 'git@github.com:primefaces/primereact.git'
  pushed_at: '2019-02-08T07:06:42Z'
  updated_at: '2019-02-10T04:01:47Z'
  author:
    name: 'primefaces'
    avatar: 'https://avatars1.githubusercontent.com/u/3494069?v=4'
    github_url: 'https://github.com/primefaces'
  latestRelease:
    tag_name: '3.0.0'
    name: 'PrimeReact 3.0.0'
    url: 'https://github.com/primefaces/primereact/releases/tag/3.0.0'
    created_at: '2019-01-22T15:29:08Z'
---
[![Join the chat at https://gitter.im/primefaces/primereact](https://badges.gitter.im/primefaces/primereact.svg)](https://gitter.im/primefaces/primereact?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React.

![alt text](https://www.primefaces.org/wp-content/uploads/2017/09/primereact-transparent-250.png 'PrimeReact')

See [PrimeReact homepage](https://www.primefaces.org/primereact) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
npm install primereact --save
npm install primeicons --save
```

## Import

```javascript
//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons, classNames package to manage style classes and react-transition-group for animations.

```json
dependencies: {
    'react': '^16.0.0',
    'react-dom': '^16.0.0',
    'react-transition-group': '^2.2.1',
    'classnames': '^2.2.5',
    'primeicons': '^1.0.0-beta.10'
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/nova-light/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## QuickStart

An [example application](https://github.com/primefaces/primereact-quickstart) based on create-react-app is available at github.

## TypeScript

Typescript
Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-typescript-quickstart) is available as well at github.
