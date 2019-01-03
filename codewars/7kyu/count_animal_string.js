function countAnimals(sentence) {
    let num = sentence.match(/\b\d{1,2}\b/g);
    if(num == null){
        return 0
    }else{
        let numArr = num.map(item => Number(item))
        let answer = numArr.reduce((a,b) => a+b)
        return answer
    }
}

console.log(countAnimals("I see 3 zebras, 5 lions and 6 giraffes."))