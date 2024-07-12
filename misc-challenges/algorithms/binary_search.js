function search(nums, target){
    let [lo, hi] = [0, nums.length - 1]
    
    while(lo <= hi){
        const mid = (hi + lo) >> 1; //equivalent to Math.floor((hi - lo)/2)
        const value = nums[mid]

        const isTarget = value === target
        if (isTarget) return mid

        const isTargetBigger = value < target
        if (isTargetBigger) lo = mid + 1

        const istargetLess = value > target
        if (istargetLess) hi = mid - 1
    }

    return -1
}


console.log(search([-1,0,2,4,6,8], 4));
























