function checkExam(array1, array2){
    let score = 0

    array2.foreach((el,1) => {
        if(el === array1[i]){
            score += 4
        } else if (el === "") {
            score += 0
        } else {
            score -= 1
        }
    })

    return score
}