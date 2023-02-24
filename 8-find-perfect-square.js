// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//     // Step 1: find the square root of entered number
//     const squareRoot = Math.sqrt(sq);

//     // Step 2: check if the square root is a whole number
//     if(squareRoot % 1 === 0) {
//         // Step 2.1: if yes, save it in a nextRoot variable and add 1 to it
//         const nextRoot = squareRoot + 1;
//         // Step 3: multiply next root by itself to get next square root
//         return nextRoot * nextRoot;
//     } else {
//         // Step 2.2: if no, return -1
//         return -1;
//     }
//   }

// BETTER VERSION
function findNextSquare(sq) {
    // Error handling
    // Not asked in question but added because of good practice
    if(typeof sq !== 'number' || sq < 0) {
        throw new Error('Input must be a a non-negative integer.')
    }

    const squareRoot = Math.sqrt(sq);

    const nextRoot = (squareRoot % 1 === 0) ? squareRoot + 1 : -1;

    return nextRoot > 0 ? nextRoot * nextRoot : nextRoot;
}