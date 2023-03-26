/**
 * Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)
 */

//OLD
// function nearestSq(n){
//   let actual = Math.sqrt(n)
//   let lower = Math.floor(actual)**2
//   let higher = Math.ceil(actual)**2
  
//   if(n == 2) return 1
//   if(Math.abs(lower - n) < Math.abs(higher - n)){
//     return lower
//   }else{
//     return higher
//   }
// }

function nearestSq(n){
  return Math.round(Math.sqrt(n))**2
}