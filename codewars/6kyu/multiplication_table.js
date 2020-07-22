/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

function multiplicationTable(size) {
    let answer = []
    let firstArray = Array.from(Array(size), (_, i) => i + 1)

    answer.push(firstArray)

    for(let i = 2; i <= size; i++) {
        answer.push(firstArray.map((el) => el * i))
    }
    
    console.log(answer)
    return answer
}

multiplicationTable(3)