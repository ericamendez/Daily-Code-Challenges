/**
 * Write a
 function that when given a number >= 0, returns an Array of ascending length subarrays.

 pyramid(0) => []
 pyramid(1) => [
   [1]
 ]
 pyramid(2) => [
   [1],
   [1, 1]
 ]
 pyramid(3) => [
   [1],
   [1, 1],
   [1, 1, 1]
 ]
 */

function pyramid(n) {
  let answer = []

  if (n === 0) {
    return answer
  } else {
    let arr = []

    for (let i = 1; i <= n; i++) {
      arr.push(Array(i).fill(1))
    }

    answer.push(arr)
  }

  return [...answer]
}

console.log(pyramid(1));