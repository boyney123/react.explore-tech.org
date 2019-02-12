---
path: '/materials/redux-state-validator'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'redux-state-validator'
  url: 'https://github.com/suyesh/redux-state-validator'
  github_url: 'https://github.com/suyesh/redux-state-validator'
  subscribers_count: '1'
  stargazers_count: '1'
  tags: ['flux','json-schema','redux','redux-state','redux-state-validation']
  subtitle: null
  clone_url: 'https://github.com/suyesh/redux-state-validator.git'
  ssh_url: 'git@github.com:suyesh/redux-state-validator.git'
  pushed_at: '2018-07-27T19:00:18Z'
  updated_at: '2018-08-03T22:21:02Z'
  author:
    name: 'suyesh'
    avatar: 'https://avatars3.githubusercontent.com/u/3803603?v=4'
    github_url: 'https://github.com/suyesh'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# Redux State Validator

![Redux State Validator](http://res.cloudinary.com/dvnjqhdxp/image/upload/c_scale,w_2153/v1532706169/imgonline-com-ua-twotoone-OYK8DdNX1DBiXj.jpg)

A Simple Redux middleware to validate redux state values and object types using JSON Schema.

![How it looks](https://res.cloudinary.com/dvnjqhdxp/image/upload/v1532708882/stateValidation.gif)

## PRE-REQUIREMENT (IMPORTANT)

You need to create JSONSchema file going to [Jsonschema.net](https://jsonschema.net). Its super simple. When you go to jsonschema.net, you will see an editor on the left. Type your state in there with default values and it will autodetect the types and generate Schema on the right. Copy and paste that in a file and export it as default. Like below

![jsonSchemaEditor](http://res.cloudinary.com/dvnjqhdxp/image/upload/v1532707027/Screen_Shot_2018-07-27_at_11.56.34_AM.png)

```
export default {
	$id: 'http://example.com/example.json',
	type: 'object',
	definitions: {},
	$schema: 'http://json-schema.org/draft-07/schema#',
	properties: {
		firstReducer: {
			$id: '/properties/firstReducer',
			type: 'object',
			properties: {
				state1: {
					$id: '/properties/firstReducer/properties/state1',
					type: 'boolean',
					title: 'The State1 Schema ',
					default: false,
					examples: [true]
				},
				state2: {
					$id: '/properties/firstReducer/properties/state2',
					type: 'integer',
					title: 'The State2 Schema ',
					default: 0,
					examples: [22]
				},
				state3: {
					$id: '/properties/firstReducer/properties/state3',
					type: 'array',
					items: {
						$id: '/properties/firstReducer/properties/state3/items',
						type: 'string',
						title: 'The 0th Schema ',
						default: '',
						examples: ['apple', 'orange']
					}
				}
			}
		},
		secondReducer: {
			$id: '/properties/secondReducer',
			type: 'object',
			properties: {
				state1: {
					$id: '/properties/secondReducer/properties/state1',
					type: 'boolean',
					title: 'The State1 Schema ',
					default: false,
					examples: [true]
				},
				state2: {
					$id: '/properties/secondReducer/properties/state2',
					type: 'integer',
					title: 'The State2 Schema ',
					default: 0,
					examples: [22]
				},
				state3: {
					$id: '/properties/secondReducer/properties/state3',
					type: 'array',
					items: {
						$id: '/properties/secondReducer/properties/state3/items',
						type: 'string',
						title: 'The 0th Schema ',
						default: '',
						examples: ['apple', 'orange']
					}
				}
			}
		}
	}
};
```

## Installation

Install it as:

    $ npm install --save redux-state-validator

## USAGE

### Import Validator from redux-state-validator

```
import Validator from 'redux-state-validator';
```

### Import Json Schema on the file

```
import stateSchema from './your-json-schema';
```

### Setup `Validator` to use the schema

```
const stateValidator = Validator.Schema(stateSchema);
```

### Apply to the redux middleware

```
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(stateValidator)
);
```

Thats it.

By default it will log message only when the validation fails, If you also want to log the validation success message you can pass an additional parameter like follows:

```
const stateValidator = Validator.Schema(stateSchema, true)
```
