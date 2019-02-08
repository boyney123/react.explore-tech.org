---
path: '/materials/react-location-picker'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-location-picker'
  url: 'https://react-location-picker.netlify.com/'
  github_url: 'https://github.com/rameshsyn/react-location-picker'
  subscribers_count: '1'
  stargazers_count: '9'
  tags: ['google-maps','location-picker','react-location-picker']
  subtitle: 'A react component to pick a location using google maps'
  clone_url: 'https://github.com/rameshsyn/react-location-picker.git'
  ssh_url: 'git@github.com:rameshsyn/react-location-picker.git'
  pushed_at: '2018-12-03T14:33:30Z'
  updated_at: '2019-02-08T04:59:36Z'
  author:
    name: 'rameshsyn'
    avatar: 'https://avatars1.githubusercontent.com/u/10565954?v=4'
    github_url: 'https://github.com/rameshsyn'
  latestRelease:
    tag_name: null
    name: null
    url: null
    created_at: null
---
# react-location-picker
> A react component to pick a location using google maps.

[Demo](https://react-location-picker.netlify.com/)
### Installation
```shell 
npm install react-location-picker --save
```  
or  
```shell 
yarn add react-location-picker --save
```

You need to include google map script in your page.  
`    <script src='https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places'></script>
`
### Example
```js
import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};


class LocationPickerExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
      address: 'Kala Pattar Ascent Trail, Khumjung 56000, Nepal',
      position: {
         lat: 0,
         lng: 0
      }
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange ({ position, address }) {

    // Set new location
    this.setState({ position, address });
  }

  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}
```
### Usage
LocationPicker properties 

| Property | Type | Description |  
|---------------------|-------------------|------------------|  
| containerElement | node | required, A container element for map element|  
| mapElement | node | required, A map element|  
| onChange | function | required, A callback which gets called on every map marker position change, it is passed with one argument of type object which has location information.|
| defaultPosition | object | required, A default position for map center.|
| zoom | number | optional, Map zoom level |
| radius | number | optional, Circle radius in meter. or Pass -1 to hide it.|
| circleOptions | object | optional,  https://developers.google.com/maps/documentation/javascript/3.exp/reference#CircleOptions
  

### Development
For demo, clone this repo and run

Install all dependencies  
`yarn` 

Start  
`yarn start`

Open `http://localhost:8080` in your browser.
