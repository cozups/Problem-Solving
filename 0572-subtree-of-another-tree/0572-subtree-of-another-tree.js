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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    // root의 서브트리 중 같은 구조와 값을 가진 "subRoot를 루트노드로 가지는 트리"가 있는지
    // 트리 순회하다가 subRoot.val과 같은 값을 가진 노드를 발견하면 subtree 확인
    // dfs 활용
    if (!subRoot) {
        return true;
    }
    if(!root) {
        return false;
    }

    if(sameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    function sameTree(root, subRoot) {
        if(!root && !subRoot) return true;

        if(root && subRoot && root.val === subRoot.val) {
            return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right);
        }

        return false;
    }

    return false;
};