/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 두 개의 정렬된 리스트를 하나의 정렬된 리스트로 합치기
    // 정렬된 리스트의 헤드를 넘길 것
    const temp = { val: 0, next: null };
    let node = temp;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }

    if(list1) {
        node.next = list1;
    }

    if(list2) {
        node.next = list2;
    }

    return temp.next;
};