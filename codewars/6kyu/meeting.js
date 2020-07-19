/**
 * John has invited some friends.His list is:

     s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
 Could you make a program that

 makes this string uppercase
 gives it sorted in alphabetical order by last name.
 When the last names are the same, sort them by first name.Last name and first name of a guest come in the result between parentheses separated by a comma.

 So the result of function meeting(s) will be:

     "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
 It can happen that in two distinct families with the same family name two people have the same first name too.

 Notes
 You can see another examples in the "Sample tests".
 */

function meeting(s) {
    let personArray = s.toUpperCase().split(";")

    let lastNameSort = personArray.sort((a, b) => {
        let NameA = a.split(":")
        let NameB = b.split(":")

        if (NameA[1] > NameB[1] ) {
            return 1
         } else if (NameA[1] === NameB[1]) {
            if (NameA[0] > NameB[0]) {
                return 1
            } else {
                return -1
            }
         } else {
             return -1
         }
    })

    let answer = ""

    let stringFormatting = lastNameSort.forEach((el, i) => {
        let person = el.split(":")
        answer += `(${person[1]}, ${person[0]})`
    })

    return answer
}

 let str = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

 meeting(str)