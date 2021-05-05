/**
 * Task
 Given two cells on the standard chess board, determine whether they have the same color or not.

 Example
 For cell1 = "A1"
 and cell2 = "C3", the output should be true.



 For cell1 = "A1"
 and cell2 = "H3", the output should be false.



 Input / Output[input] string cell1

 [input] string cell2

   [output] a boolean value

 true
 if both cells have the same color, false otherwise.
 */

function chessBoardCellColor(cell1, cell2) {
  console.log(cellColor(cell1))
  console.log(cellColor(cell2))
  return cellColor(cell1) === cellColor(cell2) ? true : false
}

const cellColor = (cell) => {
  const letter = cell.split('')[0]
  const num = parseInt(cell.split('')[1])
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  // when both letter index, and num are even or both ar dark => dark
  if ((letters.indexOf(letter) % 2 === 0) === ((num - 1) % 2 === 0)) {
    return 'dark'
  } else {
    return 'light'
  }
}

console.log(chessBoardCellColor('A1', 'A2'));