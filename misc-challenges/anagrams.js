// Anagrams

const checkAnagram = (str1, str2) => {
  let str1CountArr = Object.entries(getCharCountObj(str1))
  let str2CountObj = getCharCountObj(str2)

  let answer = true

  str1CountArr.forEach(char => {
    if (str2CountObj[char[0]] !== char[1]) {
      answer = false
    }
  });

  return answer
}

const getCharCountObj = str => {
  const cleanStr = str.replace(/[^A-Z0-9]+/ig, "")
  let obj = {}

  for (let char of cleanStr) {
    obj[char] = obj[char] + 1 || 1
  }

  return obj
} 

console.log(checkAnagram('ericaa m', 'erica a'));