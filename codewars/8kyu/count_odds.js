/*
Count Odd Numbers below n

-Given a number n, return the number of positive odd numbers below n
*/

function oddCount(n){
  let count = 0
  for(let i = 1; i <= Number(n); i++){
    i % 2 != 0 ? count += 1 : null
  }
  return count
}
