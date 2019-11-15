/*
 Problem
 A string is simply an ordered collection of symbols selected from some alphabet and formed into a word;
 the length of a string is the number of symbols that it contains.

 An example of a length 21 DNA string(whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is "ATGCTTCAGAAAGGTCTTACG."

 Given: A DNA string s of length at most 1000 nt.

 Return: Four integers(separated by spaces) counting the respective number of times that the symbols 'A', 'C', 'G', and 'T'
 occur in s.

 Sample Dataset
 AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC
 Sample Output
 20 12 17 21
 */

const dna = 'GCGAGCTGGCATCATATCCCGTTACCGCGGGACCCCTGCACAACAGGCCTTGGT'

const answer = (dna) => {
    const dnaArr = dna.split('')
    
    let a = 0
    let g = 0
    let t = 0
    let c = 0
    
    dnaArr.forEach(n => {
        n === 'A' ? a++
            : n === 'G' ? g++
            : n === 'T' ? t++
            : c++
    });

    return `${a} ${c} ${g} ${t}`
}

answer(dna)