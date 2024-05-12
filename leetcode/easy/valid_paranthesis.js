/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 * 
 */

const valid = '{[]}'
const notValid = '([)]'
const valid2= '()[]{}'

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const open = ['[', '{', '(']
    
//     let count = 0
//     let check = ''
//     let answer = true

//     for(let i = 0; i < s.length; i++){
//         if(!open.includes(s[i])){
//             if(s.substring(i, i+count) === check){
//                 i = i+count-1
//                 count = 0
//             }else {
//                 answer = false
//             }
//         } else {
//             if(s[i] === '['){
//                 check = ']'+check
//             } else if(s[i] === '{'){
//                 check = '}'+check
//             }else {
//                 check = ')'+check
//             }
//             count++
//         }
//     }
//     console.log(check)
//     return answer
// };





//SECOND ATTEMPT 2024

/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function(s) {
    console.log('hi');
    const map = {
        ')': '(', 
        ']': '[', 
        '}': '{'
    }
    let stack = []

    for(let i = 0; i < s.length;i++){
        console.log(stack);
        if(Object.values(map).includes(s[i])){
            stack.push(s[i])
        } else if (map.hasOwnProperty(s[i])){
            let value = stack.pop()
            if(map[s[i]] !== value){
                return false
            }
        }
    }
    return true
};


console.log(isValid(notValid))