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
     * @return {boolean}
     */
    hasCycle(head) {
        let set = new Set()
        let curr = head
        while(curr?.next) {
            if (set.has(curr.next)) return true
            set.add(curr)
            curr = curr.next
        }

        return false
    }
}
