/*
Write a small program that checks
for matching brackets.For example, the program would
return
true
if it were given "( ( { ( { [ ] } ) } ) )"
where all brackets pair correctly as they would in a program,
    and
return false
for something like "( ( [ ] )"
or "( [ ) ]"
Given a string of brackets,
    return
        if string is valid or not.String is valid
if all opening brackets have
matching closing brackets.
*/

const match = (str) => {
    if(str.length % 2 !== 0){
        return false
    }else{
        let count = 0
        for(let i = 0; i < str.length / 2; i++){
            let right = str.length - (1 + i)

            if (str[i] == "(" && str[right] == ")" || str[i] == "[" && str[right] == "]" || str[i] == "{" && str[right] == "}") {
                count += 1
            }
        }
        if (count === str.length / 2) {
            return true
        }else{
            return false
        }
    }
}