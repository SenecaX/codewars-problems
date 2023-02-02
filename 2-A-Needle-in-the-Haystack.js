// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// Version 0
// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//       return "found the needle at position " + i;
//     }
//   }
// }

// Refactored:
function findNeedle(haystack) {
  // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  let needleIndex = haystack.indexOf("needle");
  return `found the needle at position ${needleIndex}`;
}

console.log("findNeedle()", findNeedle(arr));
