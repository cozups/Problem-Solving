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
var maxDepth = function(root) {
    // 트리의 최대 깊이 구하기
    // DFS
    if(!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};