/**
 * Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
 */

let string = 'abbbbc'

function countRepeats(str) {
    let arr = []
    let removeCount = 0

    for(let i = 0; i < str.length; i++){
        if(arr.includes(str[i])){
            removeCount++
        }else{
            arr.push(str[i])
        }
    }

    return removeCount
}

console.log(countRepeats(string))