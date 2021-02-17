/**
 * Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non - string integers.

 Return as a number.
 * 
 */

function divCon(x) {
  let nonNum = 0
  let num = 0

  x.forEach(el => {
    if(typeof el === 'string') {
      nonNum += Number(el)
    } else {
      num += el
    }
  })

  return nonNum - num
}

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))