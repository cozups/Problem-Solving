/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // p와 q가 같은 트리인지 구분: 구조가 같고 값이 같은지
    // dfs로 트리를 순회하기
    if(!p && !q) {
        // 둘 다 null인 트리면 참
        return true;
    }

    if(p && q && p.val === q.val) {
        // 둘 다 null이 아닌 노드고 값이 같으면
        // left subtree와 right subtree를 비교
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    return false;
};