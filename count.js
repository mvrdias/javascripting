function countLetters (palavra) {
  var pal = palavra.split(" ").join("").toLowerCase();
  var results = {};
  for (i=0; i < pal.length; i++) {
    if (pal[i] in results) {
      results[pal[i]] += 1;
    } else {
      results[pal[i]] = 1;
    }
  }
  return results;
}
console.log (countLetters ('jjj dfg kol 34'));