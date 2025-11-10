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
    let pResult = [];
    let qResult = [];
    function dfs(root, arr) {
        if (!root) {
            arr.push(null);
            return;
        }

        arr.push(root.val);
        dfs(root.left, arr);
        dfs(root.right, arr);
    }

    dfs(p, pResult);
    dfs(q, qResult);

    if(pResult.length !== qResult.length) return false;
    for(let i = 0; i<pResult.length; i++) {
        if(pResult[i] !== qResult[i]) return false;
    }
    return true;
};