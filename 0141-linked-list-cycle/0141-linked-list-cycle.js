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
    const visited = new Set();
    let cur = head;
    while(cur) {
        if(visited.has(cur)) {
            return true;
        } else {
            visited.add(cur)
        }
        cur = cur.next;
    }

    return false;
};