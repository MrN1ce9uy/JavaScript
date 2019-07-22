//

function copyAndSortNumbers(numbers) {
  var newarr = numbers.slice().sort();
  return newarr;
}

const original = [1, 7, 3, 5];
const sortedCopy = copyAndSortNumbers(original);

console.log(original, '<-- should be [1, 7, 3, 5]');
console.log(sortedCopy, '<-- should be [1, 3, 5, 7]');
