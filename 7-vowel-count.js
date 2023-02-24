// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    // convert string to array
    const convertToArray = str.split('');

    // save vowels in a set
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // declare count variable
    let count = 0;

    // loop in array
    for(let i = 0; i < convertToArray.length; i++) {
        // for each iteration, check if item is in set
        if(vowels.has(convertToArray[i])) {
            // if yes, add 1 to count
            count++;
        }
    }
    
    return count;
  }

  console.log(getCount('testings'))