/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
  let arr = text.split('')
  let counterObj = {}

  arr.forEach(char => {
    counterObj[char] = counterObj[char] + 1 || 1
  });

  let max = 0
  let answer = null

  Object.entries(counterObj).forEach(el => {
    if (el[1] > max) {
      answer = el[0]
    }
  })

  return answer
}

console.log(maxRecurringChar('ericaaaaa'))