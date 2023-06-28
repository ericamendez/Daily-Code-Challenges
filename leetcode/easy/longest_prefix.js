/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 * 
 */

let strs = ["flower","flow","flight"]

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    //loop through each string
    strs.forEach((str, i) => {

        console.log(i,'prefix', prefix)
        //check if the string contains the prefix (indexOf has to return 0 for it to be a prefix), if it doesnt continue with the while loop
        while (str.indexOf(prefix) !== 0) {
            //removes a character from the end of the strung
            prefix = prefix.substring(0, prefix.length - 1);
            //breaks the while loop if there are no prefix
            if (prefix === "") {
              return "";
            }
          }
        //compares word to word
    })
    return prefix
};

console.log(longestCommonPrefix(strs))