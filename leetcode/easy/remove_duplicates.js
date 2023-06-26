/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const example = [1,1,2,3,3]

var deleteDuplicates = function(head) {

    let linkedToArr = []
    let currentHead = head

    while(currentHead !== null){
        linkedToArr.push(currentHead.value)
        currentHead = currentHead.next
    }

    let filteredArr = [... new Set(linkedToArr)].sort()

    return filteredArr.reduceRight((next, value) => ({value, next}), null);

}

/**
 * EXAMPLE OF TURNING AN ARRAY INTO A LINKEDLIST IN JAVASCRIPT
 * { value: 3, next: { value: 1, next: { value: 2, next: [Object] } } }
 * 
 */
l = [3, 1, 2, 3, 4, 5];

function linkedList(arr){
    return arr.reduceRight((next, value) => ({value, next}), null);
}
  
  let exampleLinkedList = linkedList(l)
//   console.log(exampleLinkedList);


/**
 * TESTING THE FUNCTION
 */

console.log(deleteDuplicates(exampleLinkedList))







/**
 * LOOPING THORUGH THE LINKED LIST
 */

// let head = exampleLinkedList
// let arrFromLinked = []

// while(head !== null){
//     arrFromLinked.push(head.value)
//     head = head.next
// }

// console.log(arrFromLinked)