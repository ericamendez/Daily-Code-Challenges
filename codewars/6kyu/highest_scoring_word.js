/**
 * Given a string of words, you need to find the highest scoring word.

 Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

 You need to
 return the highest scoring word as a string.

 If two words score the same,
 return the word that appears earliest in the original string.

 All letters will be lowercase and all inputs will be valid.
 */

function high(x) {
  const arr = x.split(' ')
  let scoreKeeper = 0
  let answer = null

  arr.forEach(word => {
    let score = word.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0) - 96
    }, 0)

    if (score > scoreKeeper) {
      scoreKeeper = score
      answer = word
    }
  });

  return answer
}

console.log(high('volcano climbing'));