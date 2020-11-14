/**
 * Complete the method which returns the number which is most frequent in the given input array.If there is a tie
 for most frequent number,
 return the largest number among them.

 Note: no empty arrays will be given.
 */

function highestRank(arr) {
  let frequencies = {}

  arr.forEach(num => {
    frequencies[num] = frequencies[num] + 1 || 1
  });

  let answer = Object.keys(frequencies).reduce((acc, current) => frequencies[acc] > frequencies[current] ? acc : current)

  return Number(answer)
}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));