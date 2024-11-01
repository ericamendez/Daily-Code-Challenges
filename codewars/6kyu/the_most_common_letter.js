/**
 * Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
 */

let sample = 'my mom loves me as never did'

var obj = {a: 1, b: 2, undefined: 1};

// Object.keys(obj).reduce((acc, b) => obj[acc] > obj[b] ? acc : b);


function replaceCommon(string, letter) {
    let occurances = {} 
    
    for(let i = 0; i < string.length; i++){
        if(string[i] !== ' '){
            occurances[string[i]] = occurances[string[i]] = occurances[string[i]] + 1  || 1
        }
    }
    // console.log(occurances)
    let max = Object.keys(occurances).reduce((acc, current) => occurances[acc] >= occurances[current] ? acc : current)

    let answer = ''
    for(let i = 0; i < string.length; i++){
        if(string[i] === max){
            answer += letter
        } else {
            answer += string[i]
        }
    }
    return answer
}

console.log(replaceCommon(sample, 'e'))