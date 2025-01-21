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
        let prev = null; // To hold the previous node
        let current = head; // Start with the head of the list

        while (current) {
            let nextNode = current.next; // Temporarily store the next node
            current.next = prev; // Reverse the current node's pointer
            prev = current; // Move the prev pointer to the current node
            current = nextNode; // Move to the next node
        }

        return prev; // `prev` will be the new head of the reversed list
    }
}
// https://leetcode.com/problems/reverse-linked-list/