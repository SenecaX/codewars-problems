// First version
/* function splitIntoArray(num) {
  return String(num).split('').map(Number);
}

function digitize(n) {
  //step 1: split number into array
  let originalArray = splitIntoArray(n);


  
    // step 2: create another array
  let newArray = [];
  
    // step 3: push elements of original array to new array but in reverse order
    for(let i = originalArray.length; i > 0; i--) {
      newArray.push(originalArray[i-1])
    }
  
  return newArray;
} */

// Refactored version
function digitize(n) {
  // Step 1: Convert the number to a string
  let numString = String(n);

  // Step 2: Split the string into an array of characters
  let splitDigits = numString.split("");

  // Step 3: Map the array of characters to an array of numbers
  let convertArrayToNumbers = splitDigits.map((char) => Number(char));

  // Step 4: Reverse the array of numbers
  return convertArrayToNumbers.reverse();
}

// Test
console.log(digitize(35231));
