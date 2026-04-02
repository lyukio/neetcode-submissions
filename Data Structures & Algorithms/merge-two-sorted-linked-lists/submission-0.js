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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1
        let curr2 = list2
        let newListHead = null
        let newListTail = null
        while(curr1 || curr2) {
            if (!curr2 || curr1 && curr1.val <= curr2.val) {
                if (!newListHead) {
                    newListHead = curr1
                } else {
                    newListTail.next = curr1
                }
                newListTail = curr1
                curr1 = curr1.next
            } else {
                if (!newListTail) {
                    newListHead = curr2
                } else {
                    newListTail.next = curr2
                }
                newListTail = curr2
                curr2 = curr2.next
            }
        }
        return newListHead
    }
}
