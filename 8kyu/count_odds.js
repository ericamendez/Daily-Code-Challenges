/*
Count Odd Numbers below n

-Given a number n, return the number of positive odd numbers below n
*/

let list = [];

function oddCount(n){
  let int = Number(n);
  if(int > 0){
    for(let i = 1; i <= int; i++){
      if(i % 2 != 0){
        list.push(i);
      }
    }
  }
  return list.length
}
