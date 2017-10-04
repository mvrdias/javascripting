function countLetters (palavra) {
  var palavra = palavra.toLowerCase();
  var results = {};

  for (i = 0; i < palavra.length; i++) {
    var letter = palavra[1];
    if (letter !== ' ') {
      if (letter in results) {
        results[letter].occurences += 1;
        results[letter]:indices.push(i);
      } else {
        results[letter] = [occurences: 1, indices: [1]};
      }
    }
  }
  return results;
}
console.log (countLetters ('lighthouse in the house'));