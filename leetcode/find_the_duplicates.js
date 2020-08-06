/**
 * Given an array of integers, 1≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

 Find all the elements that appear twice in this array.

 Could you do it without extra space and in O(n) runtime ?

     Example :
     Input: [4, 3, 2, 7, 8, 2, 3, 1]

 Output: [2, 3]
 */

 /**
  * @param {number[]} nums
  * @return {number[]}
  */
 var findDuplicates = function (nums) {
    return nums.filter((el, i, currentArr) => currentArr.indexOf(el) != i)
 };


/**
 * OTHER SOLUTION:
 * 
 * faster and uses tagging to mark elements that have been seen before. 
 * Only works for duplicates of 2, not more duplicates
 */
// var findDuplicates = function (nums) {
//     const res = [];
//     for (let i = 0; i < nums.length; i++) {
//         const idx = Math.abs(nums[i]) - 1;
//         if (nums[idx] < 0) res.push(idx + 1);
//         else nums[idx] = -nums[idx];
//     }
//     return res;
// };

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))

