var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//var result = input.map(({x, y}) => (x*x)+(y*y));
// ** elevado ao quadrado

var result = input.map(function(obj){
  return Math.sqrt((obj.x * obj.x) + (obj.y * obj.y));
});
console.log(result);



//var numbers = [1, 4, 9];
//var roots = numbers.map(Math.sqrt);

//console.log(roots);

// console.log(input);
// console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);