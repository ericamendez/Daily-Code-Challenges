/**
 *
 Given a collection of distinct integers,
     return all possible permutations.

 Example:

     Input: [1, 2, 3]
 Output: [
     [1, 2, 3],
     [1, 3, 2],
     [2, 1, 3],
     [2, 3, 1],
     [3, 1, 2],
     [3, 2, 1]
 ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let output = []

    const swapArray = (arrayToSwap, indexA, indexB) => {
        const temp = arrayToSwap[indexA]
        arrayToSwap[indexA] = arrayToSwap[indexB]
        arrayToSwap[indexB] = temp
    }

    const recursivelyGenerate = (n, heapArray) => {
        if (n === 1) {
            output.push(heapArray.slice())
            return
        }

        recursivelyGenerate(n - 1, heapArray)

        for(let i = 0; i < n - 1 ; i++) {
            if (n % 2 === 0) {
                swapArray(heapArray, i, n - 1)
            } else {
                swapArray(heapArray, 0, n - 1)
            }

            recursivelyGenerate(n - 1, heapArray)
        }
    }

    recursivelyGenerate(nums.length, nums)

    return output
};