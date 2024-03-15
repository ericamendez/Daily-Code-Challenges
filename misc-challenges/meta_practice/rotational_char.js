/**
 * Rotational Cipher
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature
string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?
Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
 */


// Add any extra import statements you may need here


// Add any helper functions you may need here


function rotationalCipher(input, rotationFactor) {
    let cur = null
    let newStr = input.split('').map(char => {
      cur = char.charCodeAt(0)
      if(cur >= 65 && cur <= 90) {
        for(let i = 0 ; i <= rotationFactor; i++ ){
          if(cur === 91){
            cur = 65
          }
          if (i === rotationFactor){
            return String.fromCharCode(cur)
          }
          cur += 1
        }
      }else if(cur >= 97 && cur <= 122){
        for(let i = 0 ; i <= rotationFactor; i++ ){
          if(cur === 123){
            cur = 97
          }
          if (i === rotationFactor){
            return String.fromCharCode(cur)
          }
          cur += 1
        }
      }else if (cur >= 48 && cur <= 57){
        for(let i = 0 ; i <= rotationFactor; i++ ){
          if(cur === 58){
            cur = 48
          }
          if (i === rotationFactor){
              return String.fromCharCode(cur)
          }
          cur += 1
        }
      }else {
        return char
      }
    })
    return newStr.join('');
  }
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var input_1 = "All-convoYs-9-be:Alert1.";
  var rotationFactor_1 = 4;
  var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
  var output_1 = rotationalCipher(input_1, rotationFactor_1);
  check(expected_1, output_1);
  
  var input_2 = "abcdZXYzxy-999.@";
  var rotationFactor_2 = 200;
  var expected_2 = "stuvRPQrpq-999.@";
  var output_2 = rotationalCipher(input_2, rotationFactor_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  