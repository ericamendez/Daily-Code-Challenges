export default function bs_list(haystack, needle ) {
    let lo = 0
    let hi = haystack.length
    //do while will execute the loop at least once while regular while will check the ocndition first
    do {
        //find the middle index
        const middle = Math.floor(lo+(hi-lo)/2)
        //middle value
        const value = haystack[middle]

        //if the middle value is equal to the
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





























