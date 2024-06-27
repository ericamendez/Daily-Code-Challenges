/**
 * As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.
 */

var lengthOfSequence = function (arr, n) {
  if(!arr.includes(n)){
    return 0
  }

  let nOccurance = 0
  let count = 0

  arr.forEach(num => {
    if(num === n){
        nOccurance++
        count++
    } else if(nOccurance > 0 && nOccurance < 2){
        count++
    }
  });

  return nOccurance === 2 ? count : 0
};

const array = [0, -3, 7, 4, 0, 3, 7, 9]

console.log(lengthOfSequence(array, 7));