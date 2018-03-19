var functions=  require('../http-functions');
var getHTML = functions.getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function upperCase (html) {
 console.log(html.toUpperCase());
};

getHTML(requestOptions, upperCase);
