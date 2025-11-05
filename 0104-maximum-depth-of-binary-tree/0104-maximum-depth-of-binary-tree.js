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
    
    let maxDepth = 0;
    let depth = 1;
    const stack = [[root, depth]];
    while(stack.length > 0) {
        let [current, currentDepth] = stack.pop();
        maxDepth = Math.max(maxDepth, currentDepth);
        if(current.left) {
            stack.push([current.left, currentDepth + 1]);
        }
        if(current.right) {
            stack.push([current.right, currentDepth + 1]);
        }
    }

    return maxDepth;
};