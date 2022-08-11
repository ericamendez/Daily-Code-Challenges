/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

//SLOW SOLUTION
var isAnagramOLD = function(s, t) {
    if(s.length === t.length){

        let tCopy = t.split('')
        
        for(let i = 0 ; i < s.length ; i++){
            if(tCopy.includes(s[i])){
                tCopy.splice(tCopy.indexOf(s[i]), 1)
            } else {
                return false
            }
        }
        return true

    } else {
        return false
    }
};

//Map solution... Faster Solution
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }

    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++){
        sMap[s[i]] = sMap[s[i]] + 1 || 1
        tMap[t[i]] = tMap[t[i]] + 1 || 1
    }

    for (char in sMap) {
        if(sMap[char] !== tMap[char]){
            return false
        }
    }
    
    return true
};

//Sorting Solution (slower than Map solution)
var isAnagram2 = function(s, t) {
    if(s.length !== t.length){
        return false
    }

    let sArr = s.split('').sort()
    let tArr = t.split('').sort()

    console.log(tArr)
    return sArr.every((char, i) => char === tArr[i])
};

console.log(isAnagram('anagram', 'nagaram'))