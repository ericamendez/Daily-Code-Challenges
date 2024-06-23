/**
 * 
 */

function diamond(n){
    if(n % 2 === 0){
        return null
    }
    
    let middle = Math.ceil(5/2)
    let answer = ''

    for(let i = 0; i < n; i++){
        if(i === 0){
            answer += '*'
        } else if (i > 0 && i <= middle){

        } else {
            
        }
    }
    return answer;
}

console.log(" *\n***\n *\n");
console.log(diamond(5));
