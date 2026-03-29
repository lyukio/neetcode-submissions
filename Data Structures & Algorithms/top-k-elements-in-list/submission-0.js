class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequence = new Map()
        const result = []
        for (let i = 0; i < nums.length; i++) {
            frequence.set(nums[i], ((frequence.get(nums[i]) || 0)+ 1))
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => [])
        for (const [item, qt] of frequence) {
            bucket[qt].push(item)
        }

        for (let i = nums.length; i > 0; i--) {
            if (bucket[i].length > 0) result.push(...bucket[i])
            if (result.length >= k) return result
        }

        return result
    }
}
