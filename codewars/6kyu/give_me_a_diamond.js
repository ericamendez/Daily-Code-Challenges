/**
 * 
 */

function diamond(n){
    if(n % 2 === 0){
        return null
    }
    
    let middle = Math.floor(n/2)
    let middleStars = 2*middle + 1
    let starCount = 1
    let answer = ''
    let spaceNeeded = (middleStars - starCount)/2

    console.log('test', '*'.repeat(0))
    for(let i = 0; i < n; i++){
        if (i > 0 && i <= middle){
            starCount += 2
            spaceNeeded -= 1
        } else if (i > middle) {
            starCount -=2
            spaceNeeded += 1
        }

        let star = '*'.repeat(starCount)
        let space = ' '.repeat(spaceNeeded)
        answer += space + star + '\n'
        console.log('i', i, '*', starCount ,'spacesNeeded',spaceNeeded);
    }
    return answer;
}

console.log(" *\n***\n *\n");
console.log(diamond(5));

