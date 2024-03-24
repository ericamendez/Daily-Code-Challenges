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

//BRUTE FORCE 👎🏽
let arrayToLinkedList = (arr) => {
    let head = {
        val: Number(arr[0]),
        next: null
    }

    for (let i = 1; i < arr.length; i++) {
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

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return arr
}

let formatArrayToNumber = (arr) => {
    console.log('format', BigInt(arr.join('')), typeof Number(arr.join('')));
    return BigInt(arr.join(''))
}

var addTwoNumbers = function (l1, l2) {
    let arr1 = linkedListToArray(l1)
    let arr2 = linkedListToArray(l2)

    const sum = formatArrayToNumber(arr1) + formatArrayToNumber(arr2)
    console.log('sum', sum)

    const sumFormattedToArray = sum.toString().split('')

    return arrayToLinkedList(sumFormattedToArray)
};

// edge case
let a1 = [2, 4, 3]
let a2 = [5, 6, 4]


const a1ToLL = arrayToLinkedList(a1)
const a2ToLL = arrayToLinkedList(a2)

// console.log("finallll", addTwoNumbers(a1ToLL, a2ToLL))
// console.log("finallll", linkedListToArray(addTwoNumbers(a1ToLL, a2ToLL)));



//OPTIMIZED SOLUTION, no deconstructing and reconstructing linked list
//O(n) time complexity

// constructor function that starts off a linked list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers2 = function (l1, l2) {
    let carry = 0;
    let prevNode = new ListNode();
    const headNode = prevNode;
    while (l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;

        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {

            val2 = l2.val;

            l2 = l2.next;

        }
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;
        const currentNode = new ListNode(digit);
        console.log('currentNode',currentNode)
        console.log('prevNode',prevNode);
        prevNode.next = currentNode;
        console.log(`prevNode.next`,prevNode);
        prevNode = currentNode;
        console.log('headNode',headNode);
    }
    return headNode.next;
}

console.log(addTwoNumbers2(a1ToLL, a2ToLL));