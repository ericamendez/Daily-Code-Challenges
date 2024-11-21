function replaceChar(str){
    return str.split('').map((char, i, arr) => {
        console.log('char: ', char, 'firstIndex: ', arr.indexOf(char), 'lastIndex: ', arr.lastIndexOf(char))
        return (arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')')
    }).join('')
}

console.log(replaceChar('giraffe'))