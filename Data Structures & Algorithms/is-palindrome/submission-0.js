class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const len = s.length
        const half = len / 2 - 1
        for (let i = 0; i <= half; i++) {
            if (s[i] !== s[len-i-1]) return false
        }
        return true
    }
}
