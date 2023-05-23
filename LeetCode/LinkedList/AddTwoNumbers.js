/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 내가 생각한 답 (오답) -> 숫자가 커질 때 1e+3 이런식으로 바뀌므로 문제가 됨
var addTwoNumbers = function (l1, l2) {
  let n1 = [];
  let n2 = [];
  while (l1) {
    n1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    n2.push(l2.val);
    l2 = l2.next;
  }
  n1 = +n1.reverse().join('');
  n2 = +n2.reverse().join('');

  let n3 = (n1 + n2 + '').split('');
  let temp = null;
  let curr = null;
  let l3 = null;
  console.log(n3);

  for (let i = 0; i < n3.length; i++) {
    temp = new ListNode(n3[i]);
    if (curr) {
      temp.next = curr;
    }
    curr = temp;
  }

  l3 = temp;

  return l3;
};

/*
재귀를 이용한 답

var addTwoNumbers = function(l1, l2) {
  const iter = (n1, n2, carry = 0) => {
      if(!n1 && !n2 && !carry) {
          // 더할 것도 없고 캐리도 없을 때 => 완료
          return null;
      }
      const sum = (n1?.val || 0) + (n2?.val || 0) + carry;
      const nextNode = iter(n1?.next, n2?.next, Math.floor(sum / 10));
      return new ListNode(sum % 10, nextNode);
  }

  return iter(l1, l2);
};

*/
