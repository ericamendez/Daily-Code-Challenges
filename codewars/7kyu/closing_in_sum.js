/**
 * Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

Worked Example
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72
Examples
121 ➞ 13
# 11 + 2

1039 ➞ 22
# 19 + 3

22225555 ➞ 100
# 25 + 25 + 25 + 25
 */

function closingInSum(n) {
    let str = n.toString()
    let count = 0

    for(let i = 0; i< Math.ceil(str.length/2) ; i++){
        if(i === str.length-i-1){
            // console.log(Number(str[i]))
            count += Number(str[i])
        }else{
            count += Number(str[i]+str[str.length-i-1])
        }
    }

    return count
}

console.log(closingInSum(121))