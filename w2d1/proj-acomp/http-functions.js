var https = require('https');

module.exports = function(options, callback) {
  https.get(options, function(response) {
    var buffer = "";
    response.setEncoding('utf8');

    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);
      // console.log('Response stream complete.');
    });
  });
};