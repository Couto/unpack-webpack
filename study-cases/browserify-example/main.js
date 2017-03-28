var React = require('react');
var render = require('react-dom').render;
var HelloWorld = require('./components/HelloWorld.jsx');
var load = require;

if (Math.random() > 0.5) {
  var surprise = require('./surprise.js');
} else if (Math.random() < 0.5) {
  // I'm just here because I can...
  require('./another-surprise.js'); 
} else {
  // At this point this is just getting weird...
  ("") + load('./not-even-sure-what-happens.js');
}

render(<HelloWorld />, document.getElementById('app'));

module.exports = true;
