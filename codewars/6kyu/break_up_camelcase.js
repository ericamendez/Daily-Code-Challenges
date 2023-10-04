/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(string) {
    let answer = ''
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            answer += ` ${string[i]}`
        } else {
            answer += string[i]
        }
    }
    return answer
}

console.log(solution("camelCasing"))