/**
 * Buy and Sell Crypto
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

1 <= prices.length <= 100
0 <= prices[i] <= 100
 */

// Input: prices = [10,1,5,6,7,1]



function maxProfit(prices) {
    let lo = null
    let hi = null

    const arr = []

    for(let i = 0; i < prices.length; i++){
        if(i == 0 && prices[i] < prices[i+1]){
            lo = i
        }else if(prices[i + 1] < prices[i]){ // find the lows
            if(i !== prices.length -1){
                lo = i + 1
            }
            if(i !== 0) {
                hi = i
            }
            console.log(lo);
            console.log('hi', hi);
        }
        // else if (prices[i + 1] > prices[i]){
        //     hi = i
        //     console.log(hi);
        //     // arr.push({index: [lo, hi], gains: prices[hi] - prices[lo]})
        // }
    }

    console.log(arr);
}

console.log(maxProfit([10,1,5,6,7,1]));