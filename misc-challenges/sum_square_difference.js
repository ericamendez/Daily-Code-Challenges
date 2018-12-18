// Find the diffeence between the sum of square and square of sums for the first 100 numbers

let difference = (n) => {
    // array 1-n
    let arr = Array.from(Array(n), (x, index) => index + 1)
    // array squaring each element in arr
    let squares = arr.map(item => item ** 2)
    // sum of arrays
    let sumOfSquares = squares.reduce((a, b) => a + b)
    let squareOfSums = arr.reduce((a,b) => a + b)
    
    return sumOfSquares - squareOfSums
}