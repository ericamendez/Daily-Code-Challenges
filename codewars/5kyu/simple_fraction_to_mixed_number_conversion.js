/**
 * Task
 Given a string representing a simple fraction x / y, your
 function must
 return a string representing the corresponding mixed fraction in the following format:

     [sign] a b / c

 where a is integer part and b / c is irreducible proper fraction.There must be exactly one space between a and b / c.Provide[sign] only
 if negative(and non zero) and only at the beginning of the number(both integer part and fractional part must be provided absolute).

 If the x / y equals the integer part,
     return integer part only.If integer part is zero,
         return the irreducible proper fraction only.In both of these cases, the resulting string must not contain any spaces.

 Division by zero should raise an error(preferably, the standard zero division error of your language).

 Value ranges
     -
     10 000 000 < x < 10 000 000 -
     10 000 000 < y < 10 000 000
 Examples
 Input: 42 / 9, expected result: 4 2 / 3.
 Input: 6 / 3, expedted result: 2.
 Input: 4 / 6, expected result: 2 / 3.
 Input: 0 / 18891, expected result: 0.
 Input: -10 / 7, expected result: -1 3 / 7.
 Inputs 0 / 0 or 3 / 0 must raise a zero division error.
 Note
 Make sure not to modify the input of your
 function in -place, it is a bad practice.
 */

 function mixedFraction(s) {
    if(s[0] === "-") {
        
    }
    const splitFraction = s.split('/')
    const numerator = Number(splitFraction[0])
    const denominator = Number(splitFraction[1])

    const reduce = (numerator, denominator) => {
        var gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        gcd = gcd(numerator, denominator);
        return [numerator / gcd, denominator / gcd];
    }

    if (denominator === 0) {
        throw new Error("Attempted division by zero!")
    } else if (numerator === 0) { 
        return "0"
    } else if (numerator < denominator) {
        let simplified = reduce(numerator, denominator)
        //console.log(`${simplified[0]}/${simplified[1]}`);
        return `${simplified[0]}/${simplified[1]}`
    } else if (numerator % denominator === 0) {
        //console.log(`${Math.floor(numerator/denominator)}`);
        return `${Math.floor(numerator/denominator)}`
    } else {
        let simplified = reduce(numerator % denominator, denominator)
        //console.log(`${Math.floor(numerator/denominator)} ${simplified[0]}/${simplified[1]}`);
        return `${Math.floor(numerator/denominator)} ${simplified[0]}/${simplified[1]}`
    }
 }

 mixedFraction('22/7')