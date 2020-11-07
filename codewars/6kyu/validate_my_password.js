/**
 * I will give you a string.You respond with "VALID"
 if the string meets the requirements or "INVALID"
 if it does not.

 Passwords must abide by the following requirements:

   More than 3 characters but less than 20.

 Must contain only alphanumeric characters.

 Must contain letters and numbers.
 */

function validPass(password) {
  // ( ? = ) is a positive lookahead.With this you can check if the included pattern exists within the string without making it part of the match.
  // ( ? = . + [a - z]) tells you if there is at least one char from a - z
  // ( ? = . + \d) tells you if there is at least one char from 0 - 9

  return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password)
}

console.log(validPass("erjh~d829"));