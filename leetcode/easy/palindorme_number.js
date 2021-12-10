var isPalindrome = function(x) {
    const xStr = x.toString()
    return xStr.split('').reverse().join() === xStr ? false : true
};

console.log(isPalindrome(121))