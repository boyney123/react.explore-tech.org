---
path: '/materials/formland'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'formland'
  url: 'https://oss.indix.com/formland/'
  github_url: 'https://github.com/indix/formland'
  subscribers_count: '1'
  stargazers_count: '6'
  tags: ['form-generator','react','react-forms']
  subtitle: 'A simple, super-flexible, extensible config based form generator for React.'
  clone_url: 'https://github.com/indix/formland.git'
  ssh_url: 'git@github.com:indix/formland.git'
  pushed_at: '2018-10-03T10:46:52Z'
  updated_at: '2019-01-05T02:04:46Z'
  author:
    name: 'indix'
    avatar: 'https://avatars3.githubusercontent.com/u/22314469?v=4'
    github_url: 'https://github.com/indix'
  latestRelease:
    tag_name: 'v0.1.5'
    name: 'v0.1.5'
    url: 'https://github.com/indix/formland/releases/tag/v0.1.5'
    created_at: '2018-06-06T08:47:46Z'
---
![Logo](https://image.ibb.co/iF9Doe/formland.png)

[![Build Status](https://travis-ci.org/indix/formland.svg?branch=master)](https://travis-ci.org/indix/formland)
[![npm version](https://badge.fury.io/js/formland.svg)](https://badge.fury.io/js/formland)

A simple, super-flexible, extensible config based form generator for React.

## Features

* Super-flexible
* Config based form element creation
* Take super control over all the form elements
* Use third party components as form element

## Install

```bash
  npm i formland

  # or

  yarn add formland
```

## Usage

```javascript
import 'formland/css/index.css'
import React, { Component } from 'react'
import Form from 'formland'

class Example extends Component {
  constructor() {
    super()
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  onChange(newState) {
    this.setState(newState)
  }

  render() {
    const config = [
      {
        id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        resultPath: 'name.firstName',
        placeholder: 'Enter your first name',
      },
    ]

    return <Form config={config} store={this.state} onChange={this.onChange} />
  }
}
```

## Props

| Property                 | Type                         | Default   | Description                                                         |
| ------------------------ | ---------------------------- | --------- | ------------------------------------------------------------------- |
| config                   | array                        | []        | Config to populate form elements.                                   |
| store                    | object \| array              | {}        | The data store to read the values from.                             |
| onChange                 | function                     | undefined | Callback for `onChange` event                                       |
| onBlur                   | function                     | undefined | Callback for `onBlur` event                                         |
| onFocus                  | function                     | undefined | Callback fro `onFocus` event                                        |
| customComponentResolvers | array                        | undefined | Array of resolvers to resolve custom form elements                  |
| customValueResolvers     | array                        | undefined | Array of resolvers to resolve the value of the custom form elements |
| useNativeEvent           | boolean                      | false     | Whether to return the new state or native JS event object on events |
| primaryButton            | string \| false \| undefined | 'Submit'  | Title for the primary button. `false` to remove button              |
| secondaryButton          | string \| false \| undefined | 'Cancel'  | Title for the secondary button. `false` to remove button            |
| onSecondaryButtonClick   | function                     | `()=> {}` | onClick event handler for secondary button                          |

## Configuration File Properties

| Property                | Type     | Default   | Description                                                                                                                                                                                                                                                                     |
| ----------------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                      | string   | undefined | ID for each form field. This should be unique.                                                                                                                                                                                                                                  |
| type                    | string   | undefined | Type of the form field to be generated. The native package supports `text`, `color`, `date`, `email`, `month`, `number`, `tel`, `time`, `url`, `week`, `toggle`, `radio`, `checkbox`, `range`, `textarea`, `dropdown` types. New types can be added via `Custom Form Elements`. |
| resultPath              | string   | undefined | A [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable) compatible path to store the form field value.                                                                                                                                                           |
| displayName             | string   | undefined | Display text for the form field.                                                                                                                                                                                                                                                |
| className               | string   | undefined | ClassName for the root form field element.                                                                                                                                                                                                                                      |
| isHidden                | function | undefined | Method to hide form field element in runtime. `(store) => boolean`                                                                                                                                                                                                              |
| optional                | boolean  | undefined | Says if the form field is optional.                                                                                                                                                                                                                                             |
| placeholder             | string   | undefined | Placeholder text for the form elements                                                                                                                                                                                                                                          |
| helpText                | string   | undefined | Help text for a form element                                                                                                                                                                                                                                                    |
| helpTextOptions         | object   | undefined | See rc-tooltip [props](https://github.com/react-component/tooltip#props)                                                                                                                                                                                                        |
| options                 | array    | []        | Array of options. `({ value: any, label: any })[]`                                                                                                                                                                                                                              |
| separator               | string   | ','       | Separator to join/separate multiple values. Used by checkbox, multi-dropdown, etc.                                                                                                                                                                                              |
| topComponent            | function | undefined | Method to render any additional elements to the top of the form field element. `(store) => JSX.Element`                                                                                                                                                                         |
| simpleValues            | boolean  | false     | Handle multi values as string. Works along with `separator`.                                                                                                                                                                                                                    |
| bottomComponent         | function | undefined | Method to render any additional elements to the bottom of the form field element. `(store) => JSX.Element`                                                                                                                                                                      |
| componentProps          | object   | undefined | Any additional props that should be passed to the underlying form field element. For example, to make the `dropdown` multi-select, pass `componentProps: { multiple: true }`.                                                                                                   |
| instantValidation       | boolean  | false     | Do validation on user input.                                                                                                                                                                                                                                                    |
| required                | boolean  | false     | Make the field required.                                                                                                                                                                                                                                                        |
| validation              | function | undefined | Method to perform validation. `(value) => errorMessage|null`                                                                                                                                                                                                                    |
| modifyStoreBeforeChange | function | undefined | Method to modify store before `onChange` handler is called. `(config, value, store) => store`.                                                                                                                                                                                  |

### Available `componentProps`

#### `type: toggle`

| Property | Type   | Default   | Description                                                 |
| -------- | ------ | --------- | ----------------------------------------------------------- |
| infoText | string | undefined | Info text to be displayed to the right of the toggle switch |

#### `type: range`

| Property  | Type    | Default | Description                                   |
| --------- | ------- | ------- | --------------------------------------------- |
| showRange | boolean | true    | Shows the `min` and `max` value of the slider |
| showValue | boolean | true    | Shows the current range value explicitly      |

## Form Groups

It is possible to group form elements. Take a look at the following example.

```javascript
import 'formland/css/index.css'
import React, { Component } from 'react'
import Form from 'formland'

class Example extends Component {
  constructor() {
    super()
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  onChange(newState) {
    this.setState(newState)
  }

  render() {
    const config = [
      {
        id: 'group-1',
        type: 'group',
        displayName: 'Group 1',
        description: 'This is group 1',
        elements: [
          {
            id: 'firstName',
            type: 'text',
            displayName: 'First Name',
            resultPath: 'name.firstName',
            placeholder: 'Enter your first name',
          },
          {
            id: 'LastName',
            type: 'text',
            displayName: 'Last Name',
            resultPath: 'name.LastName',
            placeholder: 'Enter your last name',
          },
        ],
      },
      {
        id: 'group-2',
        type: 'group',
        displayName: 'Group 2',
        description: 'This is group 1',
        elements: [
          {
            id: 'country',
            type: 'text',
            displayName: 'First Name',
            resultPath: 'name.country',
            placeholder: 'Enter your country',
          },
          {
            id: 'state',
            type: 'text',
            displayName: 'Last Name',
            resultPath: 'name.state',
            placeholder: 'Enter your state',
          },
        ],
      },
    ]

    return <Form config={config} store={this.state} onChange={this.onChange} />
  }
}
```

## Validation

Validations are done per form element. Add a `validation()` method in the form element config. Validations can be done in two ways.

* Set `instantValidation: true` in the form element config. Now, the validation method will be called each time on user input.

* Use `validate()` method of the form instance. This returns an array of errors, if any. Useful for conditional based approach.

```javascript
import 'formland/css/index.css'
import React, { Component } from 'react'
import Form from 'formland'

class Example extends Component {
  constructor() {
    super()
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  onChange(newState) {
    this.setState(newState)
  }

  onSubmit() {
    const errors = this.form.validate()
    console.log(errors)
  }

  render() {
    const config = [
      {
        id: 'answer',
        type: 'text',
        displayName: 'What is 4 + 5',
        resultPath: 'answer',
        placeholder: 'Answer',
        validation: value => value !== '9' && 'Wrong Answer',
      },
    ]

    return (
      <Form
        ref={el => (this.form = el)}
        config={config}
        store={this.state}
        onChange={this.onChange}
      />
    )
  }
}
```

## Modify store value directly from config

You can access the store and change any store value directly from the config using `modifyStoreBeforeChange` method. This method will be called before `onChange` event. You can return a modified state and it will be passed to the `onChange` handler. The primary use case for this will be, to change a form value based on another form value.

```javascript
import 'formland/css/index.css'
import React, { Component } from 'react'
import Form from 'formland'

class Example extends Component {
  constructor() {
    super()
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  onChange(newState) {
    this.setState(newState)
  }

  render() {
    const config = [
      {
        id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        resultPath: 'name.firstName',
        placeholder: 'Enter your first name',
        modifyStoreBeforeChange: (config, value, store) => {
          store.readonly = value
          return store
        },
      },
      {
        id: 'readyonly',
        type: 'text',
        displayName: 'Output',
        resultPath: 'readonly',
        componentProps: {
          disabled: true,
        },
      },
    ]

    return <Form config={config} store={this.state} onChange={this.onChange} />
  }
}
```

## Custom Buttons

It is possible to add custom buttons. Just wrap your buttons with `<Form>`.

```javascript
<Form
  ref={el => (this.form = el)}
  config={config}
  store={this.state}
  onChange={this.onChange}
>
  <button type='submit'>Custom Button</button>
</Form>
```

## Custom Form Elements

Custom form elements can be added to any instance of formland via `customComponentResolvers` and `customValueResolvers` props.

* `customComponentResolvers(type: string) => ({ config: IReactFormConfig, value: any, callbacks: any }) => JSX.Element`

Returns a valid React stateless function based on the custom type.

* `customValueResolvers(config: IReactFormConfig, value: any) => any`

Returns a resolved value based on the custom type.

See the following example to understand how it works.

```javascript
import 'formland/css/index.css'
import React, { Component } from 'react'
import Select from 'react-select'
import Form, { getNewState } from 'formland'

const customComponentsResolver = (type) => {
  switch(type) {
    case 'custom-dropdown':
      return ({ config, value = '', callbacks= {}}) =>
        <Select
          value={value}
          options={config.options}
          { ...callbacks }
          { ...config.componentProps } />
    default:
      return <span/>
  }
}

const customValueResolver = (config: any, value: any) => {
  switch (config.type) {
    case 'react-select':
      return value ? value.value : ''
  }
}

class Example extends Component {
  constructor() {
    super()
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  onChange(newState) {
    this.setState(newState)
  }

  render() {
    const config = [
      {
        id: 'firstName',
        type: 'custom-dropdown',
        resultPath: 'country'
        displayName: 'Shipping Country',
        placeholder: 'Select a country',
        options: [
          {
            value: 'india',
            label: 'India',
          },
          {
            value: 'usa',
            label: 'The United States',
          },
          {
            value: 'china',
            label: 'China',
          }
        ],
      },
    ]

    return <Form
      customComponentResolvers={[customComponentsResolver]}
      customValueResolvers={[customValueResolver]}
      config={config}
      store={this.state}
      onChange={this.onChange} />
  }
}
```

## Custom Form Element Packages

* [formland-react-select](https://github.com/praneshr/formland-react-select) - `react-select` components for formland

## Development

```bash
yarn install
yarn build
yarn start:examples
```

Refer `package.json` for more commands

## License

MIT
