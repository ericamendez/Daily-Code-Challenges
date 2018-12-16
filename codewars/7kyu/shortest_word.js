/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let stringArray = s.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; });
  let check = stringArray[0];
  stringArray.forEach(function(str){
    if(check.length > str.length){
      check = str.length;
    }
  })
  return check
}
