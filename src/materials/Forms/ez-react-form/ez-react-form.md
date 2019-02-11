---
path: '/materials/ez-react-form'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'ez-react-form'
  url: 'https://github.com/ngduc/ez-react-form'
  github_url: 'https://github.com/ngduc/ez-react-form'
  subscribers_count: '1'
  stargazers_count: '8'
  tags: ['component','form','react']
  subtitle: 'A simple way to work with Forms in React.'
  clone_url: 'https://github.com/ngduc/ez-react-form.git'
  ssh_url: 'git@github.com:ngduc/ez-react-form.git'
  pushed_at: '2019-01-26T17:10:11Z'
  updated_at: '2019-01-28T07:34:07Z'
  author:
    name: 'ngduc'
    avatar: 'https://avatars2.githubusercontent.com/u/639189?v=4'
    github_url: 'https://github.com/ngduc'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# ez-react-form

[![Build Status](https://travis-ci.org/ngduc/ez-react-form.svg?branch=master)](https://travis-ci.org/ngduc/ez-react-form)

A simple way to work with Forms in React.

- Live Demo: [Codesandbox](https://codesandbox.io/s/on50k50wy)
- Code examples: [Link](../src/examples)

### 🌟 Features

```JS
$ npm install ez-react-form
import { FormContainer, Form, Field, Button } from 'ez-react-form';

<FormContainer onSubmit={this.onSubmit} render={props => (
  <Form use='bootstrap4'>
    <Field label='Text' name='text' />
    <Field name='password' />
    <Field textarea name='textarea' />
    <Field select options={animals} name='select' />
    <Field radios options={genders} name='radio' />
    <Field checkboxes options={roles} name='checkboxes' />
    <Field number name='number' />
    <Field date name='date' />
    <Field time name='time' />
    <Field toggle inline name='toggle' />
    <Field file label='File Upload' name='file1' />
    <Field file withPreview label='File Upload (with Preview)' name='file2' />
    <Field range name='range' />

    <Button type='submit'/>
    <Button>Cancel</Button>
  </Form>
)} />
```

Result: (Full form, validation (with yup) & error messages)

[![Screenshot](screenshot-types.png)](https://codesandbox.io/s/on50k50wy)

- Render different `form layouts`: Bootstrap 4, Semantic UI, Spectre and more. (including horizontal layout, inline fields)
- Compatible with `formik`. This is built on top of formik and can be used together with it (for custom fields, etc.)
- Support popular and advanced field types.
- Works well on mobile screens.

### 📖 Documentation

[Change Log](/CHANGELOG.md)

#### TODO:
- Support more form layouts: Material, etc.
- More field types: Date Range, etc.
- (File a PR to request any feature, field type, etc.)

### 🙌 Thanks

All contributions are welcome!

[formik](https://github.com/jaredpalmer/formik)