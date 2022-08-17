/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {
    //[^ is looking for a charecter that does not qualify as [^a-zA-Z0-9]
    let sCopy = s.toLowerCase().slice().replace(/[^a-z0-9]/g, '')
    console.log(sCopy)
    return sCopy.split('').reverse().join('') === sCopy

};

console.log(isPalindrome('han   *nah'))