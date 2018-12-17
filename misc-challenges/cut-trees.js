// Problem 2
/*
does every tree after not descend?
so if you remove any of the numbers, will there be a decrease from l-t-r

need to see if i remove a number in array and check if there is a decrease
*/

function solutionTwo (A){
    const copy = [...A]
    let arrToSplice = [...copy]
    let arr = []

    for(let i = 0; i < A.length -1; i++){
        // gives us the array with current elemnet removed
        let removed = arrToSplice.splice(i, 1)
        
        for(let j = 1; j < removed.length; j++){
            // if any element in array decreases l-t-r, not added
            if(removed[j] > removed[j + 1]){
                arr.push(removed[i])
            }else{
                null
            }
        }
    }
    return arr
}