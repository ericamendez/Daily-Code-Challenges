/**
 * Multiples of 3 and 5

 Problem 1
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 */

let multiplesSum = (num) => {
    let arr = Array.from(Array(num + 1), (_, i) => i + 1)

    return arr.reduce((accumulator, el) => {
        return el % 3 === 0 || el % 5 === 0 ? accumulator + el : accumulator
    }, 0)
}

console.log(multiplesSum(1000));