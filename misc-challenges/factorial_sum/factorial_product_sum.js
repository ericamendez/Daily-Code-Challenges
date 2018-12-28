/*
n!means n×(n− 1)×...×3× 2× 1

For example, 10! = 10× 9×...×3× 2× 1 = 3628800,
    and the sum of the digits in the number 10!is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// recursive factorial function

const factorial = (x) => {
    if (x == 0) {
        return 1
    } else {
        return x * factorial(x - 1);
    }
}

const factorialProdSum = (n) => {
    if (n > 0){
        let prodStrArray = bigInt(factorial(n)).toString().split('')
        let prodArr = prodStrArray.map(el => Number(el))
        return prodArr.reduce((a,b) => a + b)
    }
}

console.log(factorialProdSum(100))