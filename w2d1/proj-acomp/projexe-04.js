var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(response) {
    var buffer = "";
    response.setEncoding('utf8');

    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);
      console.log('Response stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML (requestOptions,printHTML)