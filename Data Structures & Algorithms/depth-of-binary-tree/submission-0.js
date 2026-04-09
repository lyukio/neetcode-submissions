/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0
        return this.countDepth(root)
    }

    countDepth(node, depth = 1) {
        if (!node?.left && !node?.right) return depth
        let leftDepth = 0
        let rightDepth = 0
        if (node?.left) leftDepth = this.countDepth(node.left, depth+1)
        if (node?.right) rightDepth = this.countDepth(node.right, depth+1)
        return Math.max(leftDepth, rightDepth)
    }
}
