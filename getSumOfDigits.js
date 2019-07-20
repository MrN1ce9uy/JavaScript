//
// Gets the sum of the digits of a number.
//

function getSumOfDigits(num) {
  var num = num;
  sum = 0;
  while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }
  return sum;
}

/* Sample inputs/outputs below */

console.log(getSumOfDigits(42), '<-- should be 6');
console.log(getSumOfDigits(777), '<-- should be 21');
