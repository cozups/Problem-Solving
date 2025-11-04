/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 연결 리스트를 역으로 연결하는 문제
    // prev, current, next를 두고 역으로 연결
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;

    return head;
};