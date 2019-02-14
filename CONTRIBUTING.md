## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

## Issues

We'd love you to open issues, if they're relevant to this repository: feature requests, bug reports, questions about our processes, declarations of gratefulness, etc. are all welcome.

In particular, if you have a large PR you want to send our way, it may make sense to open an issue to discuss it with the maintainers first.

## Steps to add a material

You can easily add a material to the website. Here is a small list of things to do:

1. [Fork][fork] and clone the repository
1. Create a new branch: `git checkout -b my-branch-name`
1. run `npm run add:{category} {github_url}` for example `npm run add:Components https://github.com/facebook/react` to add a material. 
1. Commit changes, push and [submit a pull request][pr] 
1. Pat your self on the back and wait for your pull request to be reviewed and merged.



## Commands to add materials

### Adding a new component
`npm run add:components {GITHUB_URL}`

### Adding a tutorial
`npm run add:tutorial {GITHUB_URL}`

### Adding a test resource
`npm run add:test {GITHUB_URL}`

### Adding an example project
`npm run add:example {GITHUB_URL}`

### Adding a tool resource
`npm run add:tool {GITHUB_URL}`

### Adding a redux resource
`npm run add:redux {GITHUB_URL}`

### Adding a chart resource
`npm run add:chart {GITHUB_URL}`

### Adding a integration resource
`npm run add:integration {GITHUB_URL}`

### Adding a dev-tool resource
`npm run add:dev-tool {GITHUB_URL}`

### Adding a data resource
`npm run add:data {GITHUB_URL}`

### Adding a style resource
`npm run add:style {GITHUB_URL}`

### Adding a boilerplate
`npm run add:boilerplate {GITHUB_URL}`

### Adding a router resource
`npm run add:router {GITHUB_URL}`

### Adding a form resource
`npm run add:form {GITHUB_URL}`

### Adding a lib resource
`npm run add:lib {GITHUB_URL}`

## Supported Categories

- Boilerplates
- Components
- Forms
- Tutorials
- Tools
- Testing
- Styles

Take a look at the commands you can run https://github.com/boyney123/react.explore-tech.org/blob/0b246c86909894e858c4125c6f159b75b9c0953a/package.json#L38

## Adding a new Category

If you would like to add a new Category you will need to do two things:

1. Update the site config to add the category
1. Update `icon-to-category` mapper, and add your new logo and map.
