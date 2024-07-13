function binary_search(nums, target) {
    let lo = 0
    let hi = nums.length - 1

    while(lo <= hi){
        const mid = (hi + lo) >> 1
        const value = nums[mid]

        const isTarget = value === target
        if(isTarget) return mid

        const isTargetGreater = value < target
        if(isTargetGreater) lo = mid + 1

        const isTargetLess = value > target
        if(isTargetLess) hi = mid - 1
    }

    return -1
}