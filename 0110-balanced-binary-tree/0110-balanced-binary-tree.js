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
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 균형 잡힌 트리인지 확인 - 모든 왼쪽 서브트리와 오른쪽 서브트리의 높이가 1 이하의 차이가 나는지
    function dfs(root) {
        if (!root) return [true, 0];

        const left = dfs(root.left);
        const right = dfs(root.right);

        // 모든 서브 트리에서 높이 측정과 동시에 균형 여부를 계산해야함
        const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

        return [balanced, 1 + Math.max(left[1], right[1])]; // 균형 여부와 높이 리턴
    }

    return dfs(root)[0];
};