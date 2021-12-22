/**Programming challenge description:
Reformat a series of strings into Camel Case by returning the fragments from input as a single "sentence". For example, consider the following input:
Camel 
Case
 
LOOKS
like
ThIs
Would result in:
camelCase looksLikeThis
Input:
A series of strings with one fragment on each line of input. All characters will be from the ASCII character set.

Output:
A single line with the inputs assembled in Camel Case

Test 1
Test Input
Apple
One
Apple
TWO
APPLE
three
Expected Output
appleOne appleTwo appleThree



Test 2
Test Input
MERCURY
VENUS
EARTH
MARS
GIANTS
JUPITER
SATURN
URANUS
NEPTUNE
PLUTOExpected 

Output
mercury venus earth mars giantsJupiterSaturnUranusNeptune pluto



Test 3
Test Input
the
dog
jumped
over
the
lazy
moonExpected 

Output
theDogJumpedOverTheLazyMoon



*/

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var stdin = '';
// process.stdin.on('data', function (chunk) {
//   stdin += chunk;
// }).on('end', function() {
//   var lines = stdin.trim().split('\n');
//   var 
//   for(var i=0; i<lines.length; i++) {
//     process.stdout.write(lines[i]);
//   }
// });
 function whatever(chunk) {
    var lines = chunk
    var str = ''
    for(var i=0; i<lines.length; i++) {
      if()
    }
}

let chunk = ['MERCURY', ' ', 'VENUS',   ' ','EARTH',   ' ','MARS',    ' ','GIANTS',  'JUPITER','SATURN',  'URANUS','NEPTUNE', ' ','PLUTO'] 

console.log(whatever(chunk))