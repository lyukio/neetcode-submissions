class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length

        while (l < r) {
            const i = l + Math.floor((r - l) / 2)
            
            if (target === nums[i]) return i
            if (target > nums[i]) {
                l = i + 1
            } else {
                r = i
            }
        }

        return l < nums.length && nums[l] === target ? l : -1;
    }
}
