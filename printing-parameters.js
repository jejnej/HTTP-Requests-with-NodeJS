var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

 https.get(options, function (response) {

  response.setEncoding('utf8');
var bufferedStrings = ""
  response.on("data", function(chunk) {
  bufferedStrings += chunk;
  console.log(chunk)
});
});

};

getAndPrintHTML(requestOptions);



