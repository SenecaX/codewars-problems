// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    // convert to array
    const convertToArray = s.split(" ")

    // declare minWordLength and assign first value
    let minWordLength = convertToArray[0].length;

    for(let i = 0; i < convertToArray.length; i++) {
        if(convertToArray[i].length < minWordLength) {
            minWordLength = convertToArray[i].length
        }
    }

    return minWordLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))