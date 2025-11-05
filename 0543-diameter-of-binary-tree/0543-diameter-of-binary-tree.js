/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    // diameter of tree - 한 노드에서 다른 노드까지의 최대 경로
    // (왼쪽 서브트리의 높이 + 오른쪽 서브트리의 높이)의 최대값
    let max = 0;
    
    function dfs(root) {
        if (!root) return 0;

        const left = dfs(root.left); // 왼쪽 서브트리의 높이
        const right = dfs(root.right); // 오른쪽 서브트리의 높이
        max = Math.max(max, left + right); // diameter 갱신

        return 1 + Math.max(left, right);  // 함수의 반환값은 최대 높이
    }

    dfs(root);

    return max;
};