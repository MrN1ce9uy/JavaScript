//

function isRoundedNumberEven(decimal) {
  return Math.round(decimal) % 2 === 0; 
}

console.log(isRoundedNumberEven(2.2), '<-- should be true');
console.log(isRoundedNumberEven(2.8), '<-- should be false');
