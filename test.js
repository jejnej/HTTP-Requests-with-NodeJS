var functions = require('./http-functions');
var getHTML = functions.getHTML;
var printHTML = functions.printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


getHTML(requestOptions, printHTML)