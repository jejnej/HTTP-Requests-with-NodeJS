var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

 https.get(requestOptions, function (response) {

  response.setEncoding('utf8');
var bufferedStrings = ""
  response.on("data", function(chunk) {
  bufferedStrings += chunk;
  console.log(chunk)
});


});

}

getAndPrintHTML()
