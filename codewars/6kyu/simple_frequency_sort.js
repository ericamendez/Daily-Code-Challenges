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

    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(pair => {
        for(let i = 0; i < pair[1]; i++) {
            answer.push(Number(pair[0]))
        }
    })

    return answer
}

solve([2, 3, 5, 3, 7, 9, 5, 3, 7])