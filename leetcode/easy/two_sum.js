/**
 * Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

//Old Solution, correct but slow. Use solution with storing seen value & index in map
var twoSum = function(nums, target) {
    //loop through every element
    for(var i = 0; i < nums.length; i++){
        // this is the number would be needed for sum to equal target
        var neededNum = target - nums[i] // should be positive for all numbers smaller than target

        //if neededNum i greater than 0, that mean the number is smaller than target
        //&& if neededSum is not at the current index
        if(nums.indexOf(neededNum) >= 0 && nums.indexOf(neededNum) != i){
            return [i, nums.indexOf(neededNum)]
        }
    }
}
//console.log(twoSum([3,2,4], 6))


//look through each element, calulate what the target would have to be, compare, if founf return
// second try, wrong solution
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] < target) {
//             let needed = Math.abs(nums[i] - target)
//             if (nums.indexOf(needed) !== i && nums.includes(needed)){
//                 return [i, nums.indexOf(needed)]
//             }
//         }
//     };
// };


//Input: nums = [3,2,4], target = 6
// let map = {3: 0}
// 6-3 = 3
//return index

function twoSum2(arr, target){
    let map = {}

    for(let i = 0; i < arr.length; i++){
        const need = 6 - arr[i]
        if(Object.keys(map).includes(need.toString())){
            return [map[need], i]
        }else {
            map[arr[i]] = i
        }
    }
    console.log(map)
    return 'no solution'
}

console.log(twoSum2([3,2,4], 6))






























