/**
 * 
 */

function diamond(n){
    if(n % 2 === 0){
        return null
    }
    
    let middle = Math.ceil(5/2)
    let answer = ''

    for(let i = 1; i < n; i+=2){
        console.log(i);
        if(i === 0){
            console.log(initial);
            answer += '*|'
        } else if (i > 0 && i <= middle){
            answer += '*'.repeat(i + i + 1)+ '|'
        } else {
            
        }
    }
    return answer;
}

// console.log(" *\n***\n *\n");
console.log(diamond(5));

