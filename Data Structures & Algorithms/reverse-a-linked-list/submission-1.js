/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        return this.reverseListNode(head, null)
    }
    
    reverseListNode(currentNode, prevNode) {
        if (!currentNode) return prevNode
        const next = currentNode.next
        currentNode.next = prevNode
        return this.reverseListNode(next, currentNode)
    }
}
