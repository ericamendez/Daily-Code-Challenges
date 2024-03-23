/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let ll1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}

let ll2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}

let arrayToLinkedList = (arr) => {
    let head = {
        val: Number(arr[0]),
        next: null
    }

    for(let i = 1; i < arr.length; i++){
        head = {
            val: Number(arr[i]),
            next: head
        }
    }

    return head
}

let linkedListToArray = (ll) => {
    let head = ll
    let arr = []

    while(head){
        arr.push(head.val)
        head = head.next
    }

    return arr
}

var addTwoNumbers = function(l1, l2) {
    let arr1  = linkedListToArray(l1)
    let arr2 = linkedListToArray(l2)

    console.log(arr1.join(''))
    const sum = Number(arr1.join('')) + Number(arr2.join(''))

    //check if int is bigint
    let matcha = arr1.join('')
    console.log(typeof Number(matcha));


    const sumFormattedToArray = sum.toString().split('')
    console.log(sumFormattedToArray)

    return arrayToLinkedList(sumFormattedToArray)
};

//console.log(addTwoNumbers(ll1, ll2))

// edge case
let a1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let a2 = [5,6,4]


const a1ToLL = arrayToLinkedList(a1)
const a2ToLL = arrayToLinkedList(a2)

console.log(addTwoNumbers(a1ToLL, a2ToLL))