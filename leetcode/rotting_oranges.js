/**
 * In a given grid, each cell can have one of three values:

     the value 0 representing an empty cell;
 the value 1 representing a fresh orange;
 the value 2 representing a rotten orange.
 Every minute, any fresh orange that is adjacent(4 - directionally) to a rotten orange becomes rotten.

 Return the minimum number of minutes that must elapse until no cell has a fresh orange.If this is impossible,
     return -1 instead.

 Example 1:

     Input: [
         [2, 1, 1],
         [1, 1, 0],
         [0, 1, 1]
     ]
 Output: 4

 1 <= grid.length <= 10
 1 <= grid[0].length <= 10
 grid[i][j] is only 0, 1, or 2.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let count = 0
    let copy = [...grid]
    // console.log(copy)
    // while there are no ones (if one is isolted, return -1)

    while(grid.flat().includes(1)) {
        for(let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                let oneCheck = []

                if (grid[i][j] === 1){
                    oneCheck.push(grid[i - 1][j])
                    oneCheck.push(grid[i + 1][j])
                    oneCheck.push(grid[i][j - 1])
                    oneCheck.push(grid[i][j] + 1)

                    if(oneCheck.filter(el => el !== undefined || el !== 0).length === 0) {
                        return -1
                    }
                } else if (grid[i][j] === 2) {
                    if (i != 0 && grid[i - 1][j] !== 0) {
                        grid[i - 1][j] = 2
                    } 
                    if (i != grid.length - 1 && grid[i + 1][j] !== 0) {
                        grid[i + 1][j] = 2
                    }
                    if (j != 0 && grid[i][j - 1][i] !== 0) {
                        grid[i][j-1][i] = 2
                    }
                    if (j != grid.length && grid[i][j + 1] !== 0) {
                        grid[i][j+1] = 2
                    }
                }
            }
        }
        // console.log(copy)

        count++
    }

    return count
};


let edge = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
]

console.log(orangesRotting(edge))
