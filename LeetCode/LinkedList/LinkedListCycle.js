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
  let [s, f] = [head, head];

  while (s && f) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      return true;
    }
  }

  return false;
};
