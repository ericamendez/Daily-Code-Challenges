/*
Problem
A sequence is an ordered collection of objects(usually numbers), which are allowed to repeat.Sequences can be finite or infinite.Two examples are the finite sequence(π, −2–√, 0, π) and the infinite sequence of odd numbers(1, 3, 5, 7, 9, …).We use the notation an to represent the n - th term of a sequence.

A recurrence relation is a way of defining the terms of a sequence with respect to the values of previous terms.In the
case ofFibonacci 's rabbits from the introduction, any given month will contain the rabbits that were alive the previous month, plus any new offspring. A key observation is that the number of offspring in any month is equal to the number of rabbits that were alive two months prior. As a result, if Fn represents the number of rabbit pairs alive after the n-th month, then we obtain the Fibonacci sequence having terms Fn that are defined by the recurrence relation Fn=Fn−1+Fn−2 (with F1=F2=1 to initiate the sequence). Although the sequence bears Fibonacci'
s name, it was known to Indian mathematicians over two millennia ago.

When finding the n - th term of a sequence defined by a recurrence relation, we can simply use the recurrence relation to generate terms
for progressively larger values of n.This problem introduces us to the computational technique of dynamic programming, which successively builds up solutions by using the answers to smaller cases.

Given: Positive integers n≤ 40 and k≤ 5.

Return: The total number of rabbit pairs that will be present after n months,
    if we begin with 1 pair and in each generation, every pair of reproduction - age rabbits produces a litter of k rabbit pairs(instead of only 1 pair).

Sample Dataset
5 3
Sample Output
19

http: //rosalind.info/problems/fib/
*/

// months
const n = 5
// litter of rabbit pairs
const k = 3

/**
 * n = 0, 0 mature, 1 immature. => 0 offspring takes one month to mature.
 * 
 * n = 1, 1 mature, 0 immature. => 3 offspring
 * n = 2, 1 mature, 3 immature. => 3 offspring
 * n = 3, 4 mature, 3 immature. => 12 offspring
 * n = 4, 7 mature, 12 immature. => 21 offspirng
 * n = 5, 19 mature, 21 immature. => 57 offspring
 * 
 * mature + immature = next month mature #
 */

const rabbit = (n, k) => {
    if(n < 2){ 
        return n
    }
    return rabbit(n-1, k) + k*rabbit(n-2, k)
}

rabbit(30,2)

//357913941