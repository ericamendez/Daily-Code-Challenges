/**
 * Given a string,
 return a new string that has transformed based on the input:

     Change
 case ofevery character, ie.lower
 case to upper
 case, upper
 case to lower
 case.
 Reverse the order of words from the input.
 Note: You will have to handle multiple spaces, and leading / trailing spaces.

 For example:

     "Example Input" == > "iNPUT eXAMPLE"
 You may assume the input only contain English alphabet and spaces.
 */

 function stringTransformer(str) {
     let arr = str.split(' ')
     let answer = []

     arr.forEach(el => {
        let convertedWord = []

         for(let i = 0; i < el.length; i++) {
             if (el[i] == el[i].toUpperCase()) {
                convertedWord.push(el[i].toLowerCase())
             } else {
                convertedWord.push(el[i].toUpperCase())
             }
         }

         answer.push(convertedWord.join(''))
     })

     return answer.reverse().join(' ')
 }

 console.log(stringTransformer("Example Input"));