var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReveCase (html) {

  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printReveCase);