/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

function multiplicationTable(row, col) {
    let answer = [Array.from(Array(col), (_, i) => i + 1)]

    for(let i = 2; i <= row; i++) {
        answer.push(answer[0].map((el) => el * i))
    }
    
    return answer
}

multiplicationTable(3)