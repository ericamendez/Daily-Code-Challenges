/**
 * You have an array of numbers.
 Your task is to sort ascending odd numbers but even numbers must be on their places.

 Zero isn 't an odd number and you don'
 t need to move it.If you have an empty array, you need to
 return it.

 Example

 sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
 */

function sortArray(array) {
  let oddIndexArr = []
  let oddArr = array.filter((num, i) => {
    if (num % 2 != 0) {
      oddIndexArr.push(i)
      return num
    }
  }).sort()

  oddIndexArr.sort()
  let answer = [...array]

  oddArr.forEach((num, i) => {
    answer.splice(oddIndexArr[i], 1, num)
  });
  
  return answer
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));