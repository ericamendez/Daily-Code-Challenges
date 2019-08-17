/**
 * Unique In Order
 * 
 * Implement the
 function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

 unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 unique_in_order('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
 unique_in_order([1, 2, 2, 3, 3]) == [1, 2, 3]
 */

var uniqueInOrder = (iterable) => {
    if (iterable.length == 0) {
        return []
    } else {
        let strArr = typeof iterable === 'string' ? iterable.split("") : iterable
        let answer = [strArr[0]]
        for (let i = 1; i < strArr.length; i++) {
            if (strArr[i] !== strArr[i - 1]) {
                answer.push(strArr[i])
            }
        }
        return answer
    }
}