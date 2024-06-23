/**
 * Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
 * 
 * 
 * @param {*} str 
 * @returns 
 */

function onlyDuplicates(str) {
    let answer = ''
    for(let i = 0; i < str.length; i++){
        if(i > 0){
            let compareStr = str.slice(0, i)
            if(compareStr.includes(str[i])){
                answer = answer + str[i]
            }
        }
        if(i < str.length - 1){
            let compareStr = str.slice(i+1, str.length-1)
            if(compareStr.includes(str[i])){
                answer = answer + str[i]
            }
        }
    }
    return answer
}

console.log(onlyDuplicates("abccdefee"));