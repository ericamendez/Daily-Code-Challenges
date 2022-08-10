/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * FIRST SOLUTION:
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let singlesSet = [...new Set(nums)]
    return singlesSet.length === nums.length ? false : true
};

console.log(containsDuplicate([1,2,3,1]))

/**
 * OTHER SOLUTION... How to Optimize:
 * 
 * Did not need to convert the new Set into and array to use .length.
 * Set has a property "size" that lets me know how many values are in that set
 */

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicate2 = function (nums) {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
    return new Set(nums).size !== nums.length;
};