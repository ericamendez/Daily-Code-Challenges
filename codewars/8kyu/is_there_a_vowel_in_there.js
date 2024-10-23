/**
 * Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);

 */

const sampleArr = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
//[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

function isVow(a){
    console.log('u'.charCodeAt())
    const vowels = [
        'a'.charCodeAt(),
        'e'.charCodeAt(),
        'i'.charCodeAt(),
        'o'.charCodeAt(),
        'u'.charCodeAt(),
    ]

    let answer = []    
    
    for(num in a){        
        if(vowels.includes(a[num])){
           answer.push(String.fromCharCode(a[num]))
        }else {
            answer.push(a[num])
        }
    }
    return answer
}

console.log(isVow(sampleArr))