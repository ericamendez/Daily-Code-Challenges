/**
 * Build Tower
 Build Tower by the following given argument:
     number of floors(integer and always greater than 0).

 Tower block is represented as *

     Python: return a list;
 JavaScript: returns an Array;
 C#: returns a string[];
 PHP: returns an array;
 C++: returns a vector < string > ;
 Haskell: returns a[String];
 Ruby: returns an Array;
 Lua: returns a Table;
 Have fun!

     for example, a tower of 3 floors looks like below

 [
     '  *  ',
     ' *** ',
     '*****'
 ]
 and a tower of 6 floors looks like below

 [
     '     *     ',
     '    ***    ',
     '   *****   ',
     '  *******  ',
     ' ********* ',
     '***********'
 ]
 */

function towerBuilder(nFloors) {
    let tower = []

    for(let i = 0; i < nFloors; i++) {
        let num = i + 1
        if (i < 1) {
            tower.push(`${' '.repeat(nFloors - num)}${'*'.repeat(1)}${' '.repeat(nFloors - num)}`)
        } else {
            tower.push(`${' '.repeat(nFloors - num)}${'*'.repeat(i + num)}${' '.repeat(nFloors - num)}`)
        }
    }

    return tower
}

console.log(towerBuilder(6));