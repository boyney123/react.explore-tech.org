---
path: '/materials/todomvc-nestedreact'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'todomvc-nestedreact'
  url: 'http://todomvc.com'
  github_url: 'https://github.com/gaperton/todomvc-nestedreact'
  subscribers_count: '1'
  stargazers_count: '2'
  tags: ['']
  subtitle: 'Template used for creating TodoMVC apps'
  clone_url: 'https://github.com/gaperton/todomvc-nestedreact.git'
  ssh_url: 'git@github.com:gaperton/todomvc-nestedreact.git'
  pushed_at: '2016-02-24T18:54:55Z'
  updated_at: '2017-10-01T13:19:58Z'
  author:
    name: 'gaperton'
    avatar: 'https://avatars2.githubusercontent.com/u/469462?v=4'
    github_url: 'https://github.com/gaperton'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# NestedReact • [TodoMVC](http://todomvc.com)

React application architecture with [classical OO models](https://github.com/volicon/nestedtypes) in the data layer.

Feature list:

- First-class support for mutable models and collections in props, state, and context.
    - Unidirectional data flow and safe *pure render optimization*.
    - Two-way data binding ([Guide to Data Binding Use Cases](https://github.com/Volicon/NestedReact/blob/master/example/databinding.md))
    - Optional local component subtree updates.     
- Lightweight type annotations for props, *state*, and context as a replacement for `PropTypes`.
- Gradual transition procedure for backbone applications ([Backbone Migration Guide](https://github.com/Volicon/NestedReact/blob/master/docs/BackboneViews.md)):
    - Complete interoperation with existing Backbone Views allowing you to reuse existing code and avoid upfront application rewrite.
    - Any type of application refactoring strategy is possible - top-to-bottom, bottom-to-top, and random parts at the middle.  
    - Support for Backbone events and jQuery accessors in React components simplifies View refactoring. 

## Resources

- [NestedReact docs](https://github.com/Volicon/NestedReact)
- [Post-backbone models](https://github.com/Volicon/NestedTypes): 10x more performance, type safety, aggregation and relations right out of box. 
- [Used by](http://www.volicon.com/)

## Implementation

This TodoMVC application is written to demonstrate how powerful and expressive declarative OO data layer can be in React.

It features pure unidirectional data flow (which is common for Flux applications) achieved with conventional design
technique. Solution appears to be several times shorter than any of `flux` implementations.

##FAQ
### What does `editing : ToDo.from( '^props.todos' )` from `todolist.jsx` mean?

This is NestedTypes type annotation, which literally means '`editing` is the model of `ToDo` type which is taken from 
collection in my parent's (`^`) `props.todos` property'. In case of React component's `state` definition, 
'parent' is the React component holding the state, so `^props.todos` refers to its props. 

In NestedReact, component's state is managed with NestedTypes model, and being defined declaratively using 
attribute type specs. So, every state member becomes model attribute, which may have complex type like another
 model or collection. While it's nice by itself to have declarative spec for state, it gives you a lot more. NestedTypes observes and detects all
changes in nested model and collection tree, and triggers UI update for you automatically. For you, it mostly looks as if
   you'd work with plain objects.

Models in attributes can be _aggregated_ (thus they are inherent part of the model, and that what would happen if you just state `ToDo`
in the example above), or referenced with _relation_ (so, they are taken from some other collection). In the second case,
you add `ModelType.from( path )` for to-one relation, and `CollectionType.subsetOf( path )` for to-many relation.  

`path` in `Model.from( path )` - is the simple dot-separated path to property taken relative to model `this`. `^` is the 
shortcut for `getOwner()`, thus `^props.todos` is being translated to `this.getOwner().props.todos`.

Relation differs to aggregation in many aspects, for example:
 - relations are being serialized as referenced model ids, not as nested JSON.
 - relations are always shallow copied, even if owner is deep copied.
 - deep changes in referenced models doesn't trigger attribute's holder change.

Relations is one of the most powerful NestedTypes features. For more information, please 
check [NestedTypes Relations Guide](https://github.com/Volicon/NestedTypes/blob/master/docs/RelationsGuide.md)

## Credit

Created by Vlad Balin & [Volicon](http://www.volicon.com/)
