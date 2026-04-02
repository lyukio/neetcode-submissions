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
     * @return {TreeNode}
     */
    invertTree(root) {
        return root ? this.invertTreeRecursion(root) : root
    }

    invertTreeRecursion(node) {
        let left = null,
            right = null
        if (node.left) left = this.invertTreeRecursion(node.left)
        if (node.right) right = this.invertTreeRecursion(node.right)
        node.left = right
        node.right = left
        return node
    }
}
