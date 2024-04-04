export default function bs_list(haystack, needle ) {
    let lo = 0
    let hi = haystack.length
    do {
        const middle = Math.floor(lo+(hi-lo)/2)
        const value = haystack[middle]

        if (value === needle){
            return true
        } else if(needle > value) {
            lo = middle + 1
        } else {
            hi = middle
        }
    } while(lo < hi)

    return false
}