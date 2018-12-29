/*
Starting in the top left corner of a 2× 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20× 20 grid ?
 */

// Lattice Path Algorithm

const factorial = (x) => {
    if (x == 0) {
        return 1
    } else {
        return x * factorial(x - 1);
    }
}

let latticePath = (k) => {
    return factorial(k*2) / (factorial(k)**2)
}

console.log(latticePath(4))