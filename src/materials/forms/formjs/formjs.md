---
path: "/materials/formjs"
title: "formjs"
url: "http://procoder.io/formjs/"
github_url: "https://github.com/zackify/formjs"
author: "zackify"
watchers_count: "45"
stargazers_count: "45"
img: "./screenshot.png"
tags: []
subtitle: "A form generator for Reactjs "Alpachajs for React" Open the inspector on the demo page:"
latestRelease:
  tag_name: "undefined"
  name: "undefined"
  url: "undefined"
  created_at: "undefined"
---

![alt text](screenshot.png)

Formjs - ReactJS Forms
=========

Formjs generates HTML5 forms using [JSON Schema] data

  - Utilizes [Underscore] for object to array mapping, will possibly be turned into a standalone function to remove unneeded dependencies

Installation
--------------
The library itself is very simple. All you need to do is include it in your header along with the dependencies:
```
<script src="react.js"></script>
<script src="underscore-min.js"></script>
```
then include `<script src="build/forms.js"></script>` in your body
Supported Form Elements and their Markup
--
Formjs is still a work in progress but should be completed before the end of February, then this section will be completed.

**Form Elements**

- most input fields (text,password,url,etc)
- select boxes
- file upload
- radio
- checkbox

Passing Form Information
--

All you need to do is create a new variable called *json*, but this can be changed.

Here's an example of setting up formjs
```
   <script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    function formjsCurrent(data){
        console.log('current state');
        console.log(data);
    }
    function formjsSubmit(data){
        console.log('form submit');
        console.log(data);

    }
    function formjsFilesOnSubmit(data){
        console.log('files array on submit');
        console.log(data);
    }
    function formjsFilesOnSelect(data){
        console.log('files array on selecte');
        console.log(data);
    }
    var values = [{
    "title": "Hello world",
    "bullets": [
        {
            "text": "hello",
            "score": 5.5
        },
        {
            "text": "world",
            "score": 9.5
        }
    ],
    "are_you_awesome": true,
    "chromosome_configuration": "male",
    "age": 21,
    "birthday": "1970-01-01",
    "email": "thedude@gmail.com"
}];
      var schema = [
        {
            "description": "Create A doo hicky", 
            "schema": {
                "type": "object", 
                "properties": {
                    "title": {
                        "type": "string",  
                        "title": "title"
                    }, 
                    "bullets": {
                        "items": {
                            "type": "object", 
                            "properties": {
                                "text": {
                                    "type": "string", 
                                    "description": null, 
                                    "title": "text"
                                },
                                "score": {
                                    "type": "number",
                                    "title": "score",
                                    "enum": [1.5, 5.5, 9.5]
                                }

                            }
                        }, 
                        
                        "type": "array", 
                        "description": "", 
                        "title": "Bullets"
                    }, 
                    "are_you_awesome": {
                        "type": "boolean"
                    },
                    "chromosome_configuration": {
                        "type": "string",
                        "enum": ["male", "female"]
                    },
                    "age": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 150
                    },
                    "birthday": {
                        "type": "string",
                        "format": "date"
                    },
                    "email": {
                        "type": "string",
                        "format": "email",
                    }
                }
            }
        }];

var forms = [];
for (var i = 0; i < schema.length; i++) {
  forms.push(formjs( {data:schema[i], values: values[i], iteration:i, submitState:formjsSubmit, filesOnSubmit:formjsFilesOnSubmit, filesOnSelect:formjsFilesOnSelect, currentState:formjsCurrent} ));
}
React.renderComponent(
  React.DOM.div(null, forms),
  document.body
);
});
    </script>

```
formjs is super easy to setup. You can remove the callbacks you don't need inside of the for loop. Side note: if you didn't notice the reason for the loop, it's for rendering multiple forms just by adding another one to the schema. You can remove any callback you don't need here.

Retrieving Form data
--
There's four awesome callback functions that you can make in order to recieve data from formjs. You can see them in the index.html file, but I'll put it here too:

```
function formjsCurrent(data){
    console.log(data);
}
function formjsSubmit(data){
    console.log(data);
}
function formjsFilesOnSubmit(data){
    console.log(data);
}
function formjsFilesOnSelect(data){
    console.log(data);
}

```
The `formjsCurrent` function will be called as the user changes any form fields, and `formjsSubmit` will only be called once the submit button is pressed. This way, you can do whatever you want with your data. You'll recieve a json object that you can do whatever you want with. The last two are in case you want file uploads. In order to keep the library small, I don't handle uploads natively. With these functions you will get an array with each files object from your form.

Custom Functions
---
Instead of listening to callbacks you can also call `forms[0].getValues()` and `forms[0].getFiles()` at any time. Change the array key to whichever form you want to access!

Version
----
- **March 6th:** the first actually usable version is here! Most form inputs work, you can extend by adding your own form components and send a pull request if you want to help!
- **Februrary 13th:** Multiple form support - still only text inputs
- **Februrary 11th:** Prerelease documentaion


Adding Your Own Features
--------------

Extending Formjs is very simple. There's a great article on compiling ReactJS using the JSX compiler [here](http://facebook.github.io/react/docs/getting-started.html#offline-transform). Then you can simply edit src/forms.js and output your compiled changes to the build directory. If you would like to create a new form element you only need to edit one section, and make a new component. In the `generateField` component add another `else if` for the new property type. Then you can reference one of the form components for an idea on what you can do. Take a look at the generic input field component:

```

var genericField = React.createClass({
  render: function(){
    return(
      <div className="element inputfield">
        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        <label>{this.props.label}</label>
        <input type = {this.props.type}
        placeholder = {this.props.placeholder}
        value       = {this.props.value}
        required    = {this.props.required}
        min         = {this.props.minimum}
        max         = {this.props.maximum}
        step        = {this.props.step}
        onChange    = {this.props.change}/>
      </div>
    );
  }
});



```

Current To-do List
---
   - Add more fields
   - Remove the need for Underscore


License
----

MIT

**Free Software, Hell Yeah!**

Leave a comment with any cool things you build using my library :)

[underscore]:http://underscorejs.org/
[JSON Schema]:http://json-schema.org/
        