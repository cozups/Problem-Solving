/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let [slow, fast] = [head, head.next];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // divide list
  let second = slow.next;
  slow.next = null;

  // reverse second list
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge first & second list
  let first = head;
  second = prev;
  while (second) {
    let [temp1, temp2] = [first.next, second.next];
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
