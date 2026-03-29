class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        const charCodebase = 'a'.charCodeAt(0)

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++) {
                count[strs[i].charCodeAt(j) - charCodebase]++
            }
            const key = count.join(',')
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(strs[i]);
        }
        return Object.values(result)
    }
}
