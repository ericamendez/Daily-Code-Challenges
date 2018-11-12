/*
Coding in function ```isolateIt```. function accept 1  parameters ```arr```, it's a string array. Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example: ```"abcd"``` should became ```"ab|cd"```. ```"|"``` should be inserted between ```ab``` and ```cd```.

If the string length is an odd number, use the replacement method. for example: ```"abcde"``` should became ```"ab|de"```. Character ```c``` will be replaced by ```|```.

The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

Some example:
```
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
```

a little hint: Flexible use of ```slice()``` Will make the work more simple.

*/

// second try
function isolateIt(arr){
  let b = arr.map((s) => {
    if(s.length % 2 == 0) {
      [s.slice(0, s.length / 2), "|", s.slice(s.length / 2)].join('')
    }
  })
  return b
}

function isolateIt(arr){
  let b = arr.map(s => [s.slice(0, s.length / 2), "|", s.slice(s.length / 2)].join(''))
  return b
}
