/**
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 * https://www.tutorialcup.com/leetcode-solutions/maximum-number-of-coins-you-can-get-leetcode-solution.htm
 *  There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

In each step, you will choose any 3 piles of coins (not necessarily consecutive).
Of your choice, Alice will pick the pile with the maximum number of coins.
You will pick the next pile with the maximum number of coins.
Your friend Bob will pick the last pile.
Repeat until there are no more piles of coins.
Given an array of integers piles where piles[i] is the number of coins in the ith pile.

Return the maximum number of coins that you can have.

 

Example 1:

Input: piles = [2,4,1,2,7,8]
Output: 9
Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
The maximum number of coins which you can have are: 7 + 2 = 9.
On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.
Example 2:

Input: piles = [2,4,5]
Output: 4
Example 3:

Input: piles = [9,8,7,6,5,1,2,3,4]
Output: 18
 

Constraints:

3 <= piles.length <= 105
piles.length % 3 == 0
1 <= piles[i] <= 104
 */

// ***** MY FIRST ANSWER, BRUTE FORCED AND SLOW *****
// var maxCoins = function(piles) {
//     let sortedPile = piles.sort((a, b) => a-b)
//     let sum = 0
//     console.log(sortedPile)

//     while(sortedPile.length >= 3) {
//         sortedPile.pop()
//         sum += sortedPile[sortedPile.length-1]
//         sortedPile.pop()
//         sortedPile.shift()
//     }
//     return sum
// };

var maxCoins = function(piles) {
    let sortedPile = piles.sort((a, b) => a-b)
    let i = sortedPile.length - 2 
    let t = sortedPile.length / 3
    let j = 0
    let sum = 0

    while(j++ < t) {
        sum += piles[i]
        i -= 2
    } 

    return sum
};

let pilesArr = [9,5,6,8,10,1,4,10,7] //[9,8,7,6,5,1,2,3,4]
console.log(maxCoins(pilesArr))

// NOTES FOR WHAT JS IS DOING AT EACH STEP OF THE FOR LOOP
// First Iteration
[9,5,6,8,10,1,4,10,7] => [1, 4, 5, 6, 7, 8, 9, 10, 10]
length = 9
i = 7 // your pile
t = 3 // tells you how many iterations / logic here is how many piles can we all grab evenly (3 piles each)
j = 0 // keep track of iterations (index)
while (0 < 3) // true so continue to loop
sum = sortedArr[7] = 10

// Second Iteration 
[1, 4, 5, 6, 7, 8, 9, 10, 10]
length = 9
i = (7 - 2) = 5 // your pile
t = 3 // tells you how many iterations 
j = 1 // keep track of iterations (index)
while (1 < 3) // true so continue to loop
sum = sortedArr[5] = 8

// Second Iteration
[1, 4, 5, 6, 7, 8, 9, 10, 10]
length = 9
i = 7 // your pile
t = 3 // tells you how many iterations 
j = 2 // keep track of iterations (index)
while (2 < 3) // true so continue to loop
sum = sortedArr[3] = 6

// Third Iteration
[1, 4, 5, 6, 7, 8, 9, 10, 10]
length = 9
i = 7 // your pile
t = 3 // tells you how many iterations 
j = 1 // keep track of iterations (index)
while (3 < 3) // false.. end loop!
