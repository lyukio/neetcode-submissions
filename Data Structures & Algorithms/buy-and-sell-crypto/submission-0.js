class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currentProfit = 0
        let maxProfit = 0
        for (let i = 1; i < prices.length; i++) {
            currentProfit = Math.max(0, currentProfit + (prices[i] - prices[i-1]))
            maxProfit = Math.max(maxProfit, currentProfit)
        }
        return maxProfit
    }
}
