/**
 * In this Kata, you will sort elements in an array by decreasing frequency of elements.If two elements have the same frequency, sort them by increasing value.

 solve([2, 3, 5, 3, 7, 9, 5, 3, 7]) = [3, 3, 3, 5, 5, 7, 7, 2, 9]
     --we sort by highest frequency to lowest frequency.If two elements have same frequency, we sort by increasing value
 More examples in test cases.

 Good luck!
 */

function solve(arr) {
    let obj = {}
    let answer = []

    arr.forEach(num => {
        obj[num] = (obj[num] + 1) || 1
    })

    let sortedPairs = Object.entries(obj).sort((a, b) => {
        if (b[1] === a[1]){
            return a[0] - b[0]
        }
        return b[1] - a[1]
    })
    
    sortedPairs.forEach(pair => {
        for(let i = 0; i < pair[1]; i++) {
            answer.push(Number(pair[0]))
        }
    })

    return answer
}

solve([2, 3, 5, 3, 7, 9, 5, 3, 7])


/**
 * OTHER SOLUTION THAT IS MORE CONDENSED AND USES SOME SHORT CIRCUIT EVALUATIONS TO SOLVE
 * 1) They made an object with key of each number in the array and value of how many times the number appears, similar to my solution.
 * 2) Instead of pushing to a new array like I did, they sorted a copy of the arr argument. 
 *      - if the frequency of the second element is smaller then the first, it will be truthy, if not compare the values 
 */

//  function solve(arr) {
//      var r = {}
//      for (var n of arr) r[n] = r[n] + 1 || 1

//      console.log(arr.slice())
//      return arr.slice().sort((a, b) => r[b] - r[a] || a - b)
//  }

//  solve([2, 3, 5, 3, 7, 9, 5, 3, 7])