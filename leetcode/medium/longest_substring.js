/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string s, find the length of the longest substring without repeating characters

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let obj = {}
    let subString = 0
    let longest = 0

    for(let i = 0; i < s.length ; i++){
        s.slice(i).split('').forEach(char => {
            if(obj.hasOwnProperty(char)){
                obj = {}
                obj[char] = 1
                subString = 1
            } else {
                obj[char] = 1
                subString += 1
            }
            subString > longest ? longest = subString : null
        })
        obj = {}
        subString = 0
    }

    return longest
};


console.log(lengthOfLongestSubstring("asjrgapa"))











