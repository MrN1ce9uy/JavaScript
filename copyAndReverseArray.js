//
// Copies the original array using .slice()
// Returns the new array reversed using .reverse()
//

function copyAndReverseArray(array) {
    var newarray = array.slice().reverse();
    return newarray;
  }

/*Example inputs/outputs below*/
  
  const original = [1, 2, 3, 4, 5];
  const reversed = copyAndReverseArray(original);
  console.log(original) // should still be [1, 2, 3, 4, 5]
  console.log(reversed) // should be [5, 4, 3, 2, 1]
