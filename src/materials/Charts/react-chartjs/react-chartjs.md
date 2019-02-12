---
path: '/materials/react-chartjs'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'react-chartjs'
  url: 'https://github.com/reactjs/react-chartjs'
  github_url: 'https://github.com/reactjs/react-chartjs'
  subscribers_count: '58'
  stargazers_count: '2768'
  tags: ['']
  subtitle: 'common react charting components using chart.js'
  clone_url: 'https://github.com/reactjs/react-chartjs.git'
  ssh_url: 'git@github.com:reactjs/react-chartjs.git'
  pushed_at: '2018-12-18T12:33:16Z'
  updated_at: '2019-02-12T07:51:11Z'
  author:
    name: 'reactjs'
    avatar: 'https://avatars3.githubusercontent.com/u/6412038?v=4'
    github_url: 'https://github.com/reactjs'
  latestRelease:
    tag_name: 'v0.8.0'
    name: 'v0.8.0'
    url: 'https://github.com/reactjs/react-chartjs/releases/tag/v0.8.0'
    created_at: '2016-07-26T17:58:46Z'
---
react-chartjs
============

rich interactive react charting components using [chart.js](http://www.chartjs.org/) including

* Line chart
* Bar chart
* Radar chart
* Polar area chart
* Pie chart
* Doughnut chart

[view chart examples](http://reactjs.github.io/react-chartjs/index.html)

Installation
------------
This is a CommonJS component only (to be used with something like Webpack or Browserify)
```
npm install --save react-chartjs
```
You must also include [chart.js](https://www.npmjs.com/package/chart.js) and [React](https://www.npmjs.com/package/react) as dependencies.  
```
npm install --save chart.js@^1.1.1 react react-dom
```  

Example Usage
-------------
```javascript
var LineChart = require('react-chartjs').Line;

var MyComponent = React.createClass({
  render: function() {
    return <LineChart data={chartData} options={chartOptions} width='600' height='250'/>
  }
});
```

* ```data``` represents the chart data (see [chart.js](https://github.com/chartjs/Chart.js/tree/v1.1.1/docs) for details)
* ```options``` represents the chart options (see [chart.js](https://github.com/chartjs/Chart.js/tree/v1.1.1/docs) for details)
* all other parameters will be passed through to the ```canvas``` element
* if data passed into the component changes, points will animate between values using chart.js' ```.update()```. If you want the chart destroyed and redrawn on every change, pass in ```redraw``` as a prop. For example ```<LineChart data={this.state.chartData} redraw />```

Chart References
----------------
The ```canvas``` element can be retrieved using ```getCanvas``` and the ```chartjs object``` can be retrieved using ```getChart```.
