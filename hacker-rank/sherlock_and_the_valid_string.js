/**
 * Sherlock considers a string to be valid
 if all characters of the string appear the same number of times.It is also valid
 if he can remove just character at index in the string, and the remaining characters will occur the same number of times.Given a string, determine
 if it is valid.If so,
     return YES, otherwise
 return NO.

 For example,
 if, it is a valid string because frequencies are.So is because we can remove one and have of each character in the remaining string.If however, the string is not valid as we can only remove occurrence of .That would leave character frequencies of .

 Function Description

 Complete the isValid
 function in the editor below.It should
 return either the string YES or the string NO.

 isValid has the following parameter(s):

     s: a string
 Input Format

 A single string.

 Constraints

 Each character
 Output Format

 Print YES
 if string is valid, otherwise, print NO.

 Sample Input 0

 aabbcd
 Sample Output 0

 NO
 Explanation 0

 Given, we would need to remove two characters, both c and d aabb or a and b abcd, to make it valid.We are limited to removing only one character, so is invalid.

 Sample Input 1

 aabbccddeefghi
 Sample Output 1

 NO
 Explanation 1

 Frequency counts
 for the letters are as follows:

     {
         'a': 2,
         'b': 2,
         'c': 2,
         'd': 2,
         'e': 2,
         'f': 1,
         'g': 1,
         'h': 1,
         'i': 1
     }

 There are two ways to make the valid string:

     Remove characters with a frequency of: .
 Remove characters of frequency: .
 Neither of these is an option.

 Sample Input 2

 abcdefghhgfedecba
 Sample Output 2

 YES
 Explanation 2

 All characters occur twice except
 for which occurs times.We can delete one instance of to have a valid string.
 */

 // Complete the isValid function below.
 function isValid(s) {
    let obj = {}
    s.split("").forEach(el => {
        obj.hasOwnProperty(el) ? obj[el] += 1 : obj[el] = 1
    });


    let uniqueValues = new Map()
    Object.values(obj).forEach((el) => {
        console.log(uniqueValues.has(el))
        uniqueValues.has(el) ? uniqueValues.set(el, uniqueValues.get(el) + 1) : uniqueValues.set(el, 1)
    })

    let occurances = [...uniqueValues.values()]

    console.log(uniqueValues)

    console.log(occurances.includes(1))

    let uniqueCharDupCount = [...uniqueValues.keys()]
    const biggerByOne = uniqueCharDupCount[0] - uniqueCharDupCount[1] === 1 || uniqueCharDupCount[1] - uniqueCharDupCount[0] === 1
    if (occurances.length === 1) {
        return "YES"
    } else if (occurances.length == 2 && occurances.includes(1) && biggerByOne ) {
        return "YES"
    } else {
        return "NO"
    }
 }

 




 /**
  * 
  * OTHER SOLUTION IN PYTHON
  * 
  * #Enter your code here.Read input from STDIN.Print output to STDOUT# Enter your code here.Read input from STDIN.Print output to STDOUT
  test_string = raw_input()
  char_dict = {}
  for char in test_string:
      char_dict.setdefault(char, 0)
  char_dict[char] = char_dict[char] + 1

  freq1 = None
  freq2 = None
  printed = False
  for char in char_dict.keys():
      val = char_dict.pop(char)
  list1 = [val]
  list1.extend(char_dict.values())
  list2 = [val - 1]
  if (val - 1 > 0)
  else []
  list2.extend(char_dict.values())

  if (min(list1) == max(list1)) or(min(list2) == max(list2)):
      print 'YES'
  printed = True
  break
  char_dict[char] = val

  if not printed:
      print 'NO'
  */