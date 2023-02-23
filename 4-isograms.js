// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains 
// only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// need to check if the string has repeating letters


function isIsogram(str){
    const convertToArray = str.toLowerCase().split('');
    
    // Loop in string first
    for(let i = 0; i <= str.length; i++) {
        // remove element first in string
         convertToArray.splice(0, 1);

        // find the element in the convertToArray variable
        const similarElement = convertToArray.findIndex(element =>  element === str[i]);

        console.log('similarElement', similarElement)
        if(similarElement !== -1)  {
            return false
        }

    }
    return true;
  }


// BETTER VERSION

// Set is a built-in JavaScript object that allows you to store unique values of any type. You can add values to a Set, remove values from a Set, and check if a value is in a Set.

// When you create a Set using the new Set() constructor, you are creating an empty Set that does not contain any values initially. In the case of the code you provided, const chars = new Set(); creates an empty Set that is assigned to the chars constant.

// You can add values to a Set using the add method, like this: chars.add(value). When you add a value to a Set, the Set automatically removes any duplicates, so the final Set contains only unique values.

// In the case of the isIsogram function, the chars Set is used to keep track of the unique characters in the input string. Each time a character is processed, it is added to the chars Set using the add method. If the chars Set already contains the character, it means that the character has already appeared in the input string and the function returns false.

function isIsogram(str) {
    // Convert the string to lowercase to ignore letter case
    str = str.toLowerCase();
  
    // Create an empty Set to store the characters in the string
    const chars = new Set();
  
    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // Check if the character is already in the Set
      if (chars.has(char)) {
        // If the character is already in the Set, the string is not an isogram
        return false;
      }
  
      // Add the character to the Set
      chars.add(char);
    }
  
    // If the function has not returned yet, the string is an isogram
    return true;
  }


  console.log(isIsogram("moOse")); 