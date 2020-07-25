/**
 * Given an array nums, write a
 function to move all 0 's to the end of it while maintaining the relative order of the non-zero elements.

 Example:

     Input: [0, 1, 0, 3, 12]
 Output: [1, 3, 12, 0, 0]
 Note:

     You must do this in -place without making a copy of the array.
     Minimize the total number of operations.
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroCount = 0
    nums.forEach((num, i) => {
        num === 0 ? zeroCount += 1 : null
    })

    for (let i = 0; i < zeroCount; i++) {
        let currentZeroIndex = nums.findIndex((el) => el == 0)
        nums.splice(currentZeroIndex, 1)
        nums.push(0)
    }

    return nums
};

/**
 *
 * Things I learned from other solution when looping through an array that is being modified: 
 * - uses while loop since the for loop will get confused if we modify the array we loop through
 * - The condition in the while loop is that while i (counter for numbers > 0) is less than nums.length (the length of the continously modified array):
 *      - if the number[i]  is 0, remove that number (which modifies array) and increase count(keeps track of the amount of zeros)
 *          and do not increase the i because the element has been remove and there will be a new element in this current i
 *      - else increase i. i will eventually be equal to nums.length as we loop through the array
 *      - from there, push the amount of zeros ccount specifies to end of num array
 * 
 * (Leetcode common solution)
 var moveZeroes = function (nums) {
     // move o's
     // In place
     //

     let i = 0;
     let count = 0;
     while (i < nums.length) {
         if (nums[i] === 0) {
             nums.splice(i, 1);
             count++;
         } else {
             i++;
         }
     }

     while (count > 0) {
         nums.push(0);
         count--;
     }

 };
 */