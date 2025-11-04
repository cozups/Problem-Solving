/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 리스트에 사이클이 있는지 확인

    while (head) {
        if (!head.visited) {
            head.visited = true;
        } else {
            return true;
        }
        head = head.next;
    }

    return false;
};