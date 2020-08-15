/**
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

 This is
 case sensitive,
 for example "Aa"
 is not considered a palindrome here.

 Note:
     Assume the length of given string will not exceed 1, 010.

 Example:

     Input:
     "abccccdd"

 Output:
     7

 Explanation:
     One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

 /**
  * @param {string} s
  * @return {number}
  */
var longestPalindrome = function (s) {
    let count = 0
    let obj = {}

    for(let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] + 1) || 1
    }

    for (char in obj) {
        if (obj[char] > 1) {
            count += Math.floor(obj[char] / 2)
        }
    }

    if (s.length < 2) {
        return s.length
    } else if (s.length % 2 === 0) {
        if(count === s.length) {
            return count
        } else {
            return count + 1
        }
    } else {
        return count + 1
    }
};

console.log(longestPalindrome('eericcca'))
