/*

Given an array of integers, return the sum of all two digit numbers. 
For example, give A = [-5,1000,-15,132,-80,34] should return -61 because of the sum of the two digit numbers (-15, -80 & 34)
For example, give B = [232,45,1900,5,13,435] should return 58 because of the sum of the two digit numbers (45 & 13)

*/

const sumTwoDigit = (arr) => {
    const digitArr = arr.filter(item => {
        if(Math.sign(item) === -1 && item.toString().length === 3){
            return true
        } else if (Math.sign(item) === 1 && item.toString().length === 2) {
            return true
        }else{
            return false
        }
    })

    return digitArr.reduce((a, b) => a + b)
    
}