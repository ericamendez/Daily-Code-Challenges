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


/****************************************************************************
 * BRUTE FORCED ATTEMPT, but a good approach if the input linked list is not sorted
 */
const example = [1,1,2,3,3]

var deleteDuplicates = function(head) {

    let linkedToArr = []
    let currentHead = head

    // looping through the linked list to convert it into an array
    while(currentHead !== null){
        linkedToArr.push(currentHead.value)
        currentHead = currentHead.next
    }

    let filteredArr = [... new Set(linkedToArr)].sort()
    // turn array into a linked list
    return filteredArr.reduceRight((next, value) => ({value, next}), null);

}

/**
 * EXAMPLE OF TURNING AN ARRAY INTO A LINKEDLIST IN JAVASCRIPT
 * { value: 3, next: { value: 1, next: { value: 2, next: [Object] } } }
 * 
 */

function linkedList(arr){
    return arr.reduceRight((next, value) => ({value, next}), null);
}
  
  let exampleLinkedList = linkedList(example)
//   console.log(exampleLinkedList);


/**
 * TESTING THE FUNCTION
 */

// console.log(deleteDuplicates(exampleLinkedList))



/*******************************************************************************
 * SECOND TRY
 */
var deleteDuplicates2 = function(head) {
    let current = head

    while(current && current.next){
        // since the linked list is sorted, we can check if the current value is the same a the next value,
        // if they ar ethe same replace current.next oject with current.next.next
        if(current.val == current.next.val){
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
}

console.log(deleteDuplicates2(exampleLinkedList))