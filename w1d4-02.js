function findWaldo(arr, found) {
  arr.forEach(function(person,position) {
    if (person === "Waldo") {
          found(position);
    }
  });
}
function actionWhenFound(index) {
  console.log("Found him!" + " " +index);
}
var names = ["Alice", "Bob", "Waldo", "Winston"];
findWaldo(names, actionWhenFound);