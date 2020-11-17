/**
 * Your job is to write a
 function which increments a string, to create a new string.

 If the string already ends with a number, the number should be incremented by 1.
 If the string does not end with a number.the number 1 should be appended to the new string.
 Examples:

   foo - > foo1

 foobar23 - > foobar24

 foo0042 - > foo0043

 foo9 - > foo10

 foo099 - > foo100

 Attention: If the number has leading zeros the amount of digits should be considered.
 */

function incrementString(str) {
  const letters = str.match(/[a-zA-Z]+/g) ? str.match(/[a-zA-Z]+/g)[0] : ''
  const endNumber = str.match(/(\d+)/) ? str.match(/(\d+)/)[0].toString() : ''

  if (Number(endNumber) || Number(endNumber) === 0) {
    const endNumberLength = endNumber ? endNumber.length : ''
    const endNumberIncremented = Number(endNumber) + 1

    return letters + endNumberIncremented.toString().padStart(endNumberLength - Number(endNumber).toString.length + 1, '0')
  } else {
    console.log('thisss');
    return letters ? letters + '1' : '1'
  }

}

console.log(incrementString('foobar000'));