/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

let str1 = 'Dermatoglyphics'
let str2 = 'aba'

function isIsogram(str){
    let lower = str.toLowerCase()
    
    for(let i = 0; i < str.length; i++){
        if(i !== lower.indexOf(lower[i])) {
            return false
        }
    }
    return true
}

console.log(isIsogram(str2))