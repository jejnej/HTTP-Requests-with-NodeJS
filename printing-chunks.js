var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
 https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

var buffer = ""
response.on("data", function(chunk) {
  buffer += chunk;
  console.log(chunk)
});


});

}
getAndPrintHTMLChunks()

