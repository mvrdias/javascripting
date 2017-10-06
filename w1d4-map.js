var words = ["ground", "control", "to", "major", "tom"];

function maius(wd) {
  var mac = [];
  for (i =0 ; i <= words.length-1; i++) {
    mac[i] = wd[i].toUpperCase();
  }
  return mac;
}

function somar (wd) {
  var mac = [];
  for (i =0 ; i <= words.length-1; i++) {
    mac[i] = wd[i].length;
  }
  return mac;
}

function rever (wd) {
  var mac = [];
  for (i =0 ; i <= words.length-1; i++) {
    mac[i] = wd[i].split('').reverse().join('');
  }
  return mac;
}

console.log(maius(words));
console.log(somar(words));
console.log(rever(words));

var aa = words.map(function(wo) {return wo.length});
console.log(aa);

var aa = words.map(function(wo) {return wo.split('').reverse().join('')});
console.log(aa);

var aa = words.map(function(wo) {return wo.toUpperCase()});
console.log(aa);






// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });