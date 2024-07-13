/**
 * Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
 */

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

let groupAnagrams = (strs) => {
    const sortedWords = strs.map((word) => word.split('').sort().join(''))

    const obj = {}

    for(let i = 0; i < sortedWords.length; i++){
        if(obj[sortedWords[i]]){
            obj[sortedWords[i]].push(strs[i])
        } else{
            obj[sortedWords[i]] = [strs[i]]
        }
    }

    return Object.values(obj)
}

const arr = ["act","pots","tops","cat","stop","hat"]

console.log(groupAnagrams(arr));