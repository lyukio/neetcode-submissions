class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (let i = 0; i < strs.length; i++) {
            encoded += strs[i].length + "#" + strs[i]
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let left = 0
        while (left < str.length) {
            let right = left
            while (str[right] !== "#") {
                right++
            }
            let length = parseInt(str.substring(left, right))

            left = right + 1
            right = left + length
            decoded.push(str.substring(left, right))
            left = right
        }

        return decoded
    }
}
