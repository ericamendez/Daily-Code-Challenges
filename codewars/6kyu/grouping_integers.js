/**
 * Hi! Welcome to my first kata.

In this kata the task is to take a list of integers and a key, and group the list according to a simple rule: ints greater than or equal to the key, and ints less than the key.

You are to return a nested list. If the list is empty, simply return an empty list.

Confused? Okay, let me walk you through an example...

The input is: [1, 1, 1, 0, 0, 6, 10, 5, 10], the key is: 6
Okay so the first five numbers are less than the key, 6, so we group them together.

[1, 1, 1, 0, 0]
The next two numbers, 6 & 10, are both >= 6 to they belong in a separate group, which we will add to the first group. Like so:

[[1, 1, 1, 0, 0], [6, 10]]
The next two numbers are 5 & 10. Since the key is 6 these two numbers form separate groups, which we will add to the previous result. like so:

[[1, 1, 1, 0, 0], [6, 10], [5], [10]]
And voila! We're done.

Here are a few more basic examples:

group_ints([1, 0], key= 0)  
--> [[1,0]]

group_ints([1, 0, -1, 5], key= 0) 
--> [[1, 0], [-1], [5]]

group_ints([1, 0, -1, 5], key= 5) 
--> [[1, 0, -1], [5]]
Good luck guys/gals!
 * 
 * 
 * @param {*} xs 
 * @param {*} x 
 * @returns [[]]
 */

function groupInts(xs, x) {
    let arr = []
    let temp = []
    for (let i = 0; i < xs.length; i++) {
        if (temp.length > 0 && temp[0] < x && xs[i] >= x) {
            arr.push(temp)
            temp = []
        }
        if (temp.length > 0 && temp[0] >= x && xs[i] < x) {
            arr.push(temp)
            temp = []
        }

        temp.push(xs[i])
    }

    if (temp.length > 0) {
        arr.push(temp)
    }

    return arr;
}

console.log(groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6)) // [[1, 1, 1, 0, 0], [6, 10], [5], [10]]