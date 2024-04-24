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
function linkedListNode(value, next) {
    return {
        value: value ? value : null,
        next: next ? next : null
    }
}

var reverseList = function (head) {
    if (!head) {
        return {}
    }
    output = new linkedListNode(head.value)
    curr = head.next

    while (curr) {
        prevNode = new linkedListNode(curr.value, output)
        output = prevNode
        curr = curr.next
    }

    return output
};

const ll1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

console.log(reverseList(ll1))



/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var otherReverseList = function (head) {
    let [prev, curr, next] = [null, head, null];

    while (curr) {/* Time O(N) */
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};

console.log(otherReverseList(ll1));