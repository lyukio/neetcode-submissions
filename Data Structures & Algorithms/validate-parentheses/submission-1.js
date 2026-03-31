class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = new Map()
            .set('(', ')')
            .set('{', '}')
            .set('[', ']')

        const openBrackets = []
        
        for (let i = 0; i < s.length; i++) {
            if (brackets.has(s[i])) {
                openBrackets.push(s[i])
                continue
            }

            if (brackets.get(openBrackets[openBrackets.length-1]) !== s[i]) return false

            openBrackets.pop()
        }

        return !openBrackets.length
    }
}
