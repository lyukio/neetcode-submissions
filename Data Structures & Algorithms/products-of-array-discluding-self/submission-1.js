class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const products = Array.from({length: len})
        let left = 1
        let right = 1

        for (let i = 0; i < len; i++) {
            products[i] = left
            left *= nums[i]
        }

        for (let i = len-1; i >= 0; i--) {
            products[i] *= right
            right *= nums[i]
        }

        return products
    }
}
