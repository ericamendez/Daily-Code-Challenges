/*
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
*/

function countSheeps(arrayOfSheep) {
  let count = 0
  arrayOfSheep.forEach(function(sheep){
    if(sheep == true){
      count++
    }
  })
  return count
}


var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
