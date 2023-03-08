// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const convertStrToArray = s.split("")
    const filteredUnwantedChar = convertStrToArray.filter(e => e !== "!");
    return filteredUnwantedChar.join("");
  }


console.log(removeExclamationMarks("Hello World!"))