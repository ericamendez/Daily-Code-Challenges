/**
 * Given a sequence of integers,
   return the sum of all the integers that have an even index, multiplied by the integer at the last index.

 Indices in sequence start from 0.

 If the sequence is empty, you should
 return 0.
 */

function evenLast(numbers) {
  return numbers.reduce((acc, num, i) => {
    if (i % 2 === 0) {
      return acc + num
    } else {
      return acc
    }
  }, 0) * numbers[numbers.length - 1] || 0

}

console.log(evenLast([2, 3, 4, 5]))