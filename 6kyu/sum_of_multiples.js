//works
function solution(number){
  let num = Number(number);
  let list = 0;
  for(let i = 0; i < num; i++){
    if(i % 3 === 0 || i % 5 ===0){
      list += i;
    }
  }
  return list;
}
