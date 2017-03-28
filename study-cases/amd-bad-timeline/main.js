requirejs.config({
  paths: {
    mout: 'node_modules/mout/src',
    domReady: 'node_modules/dom-ready/dom-ready'
  },
  deps: [
    'domReady',
    'mout/array/map',
    'mout/function/compose',
    'mout/function/partial',
    'mout/string/stripHtmlTags',
    'mout/string/pascalCase',
    'mout/math/countSteps',
  ],
  callback: function (domReady, map, compose, partial) {
    console.log('yo!');
    console.log(map);
  }
});


require([
    'domReady',
    'mout/array/map',
    'mout/function/compose',
    'mout/function/partial',
    'mout/string/stripHtmlTags',
    'mout/string/pascalCase',
    'mout/math/countSteps',
  ], function () {
  
  })
