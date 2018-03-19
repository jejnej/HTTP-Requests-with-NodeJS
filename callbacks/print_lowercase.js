var functions=  require('../http-functions');
var getHTML = functions.getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function lowerCase (html) {
 console.log(html.toLowerCase());
};

getHTML(requestOptions, lowerCase);
