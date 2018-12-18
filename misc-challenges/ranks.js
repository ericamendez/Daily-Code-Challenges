// Problem 3
function solutionThree (A){
    let filtered = A.filter(item => {
        if(A.includes(item+1)){
            return item
        }
    })

    return filtered.length
}
