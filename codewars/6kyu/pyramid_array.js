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

    for (let i = 0; i < n; i++) {
      arr.push(1)
    }
  }

  return answer
}