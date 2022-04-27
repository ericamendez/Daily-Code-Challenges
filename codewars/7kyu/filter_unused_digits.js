/**
 Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

function unusedDigitsOld() {
    let completeNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let allNums = []

    for(let num in arguments) {
        let splitNum = arguments[num].toString().split('')
        allNums = [...allNums, ...splitNum]
    }

    let answer = completeNums.filter(num => allNums.indexOf(num) < 0).join('')
    return answer
}

// console.log(unusedDigits(12, 34, 56, 78))

// Optimization

function unusedDigits(...args) {
    let completeNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let allNums = []
    
    for(let num in arguments) {
        let splitNum = arguments[num].toString().split('')
        allNums = [...allNums, ...splitNum]
    }

    let answer = completeNums.filter(num => allNums.indexOf(num) < 0).join('')
    return answer
}

console.log(unusedDigits(12, 34, 56, 78))