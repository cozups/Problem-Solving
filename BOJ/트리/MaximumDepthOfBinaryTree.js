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
// var maxDepth = function (root) {
//   let res = 0;
//   const preOrder = (root, dep) => {
//     if (!root) {
//       return;
//     }

//     res = Math.max(res, dep);

//     preOrder(root.left, dep + 1);
//     preOrder(root.right, dep + 1);
//   };

//   preOrder(root, 1);

//   return res;
// };

// SOLUTION 2: RECURSIVE DFS
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

// SOLUTION 3: BFS
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   let level = 0;
//   let q = [root];

//   while (q.length) {
//     let n = q.length;
//     for (let i = 0; i < n; i++) {
//       let node = q.shift();
//       if (node.left) {
//         q.push(node.left);
//       }
//       if (node.right) {
//         q.push(node.right);
//       }
//     }

//     level += 1;
//   }

//   return level;
// };

// SOLUTION 4: ITERATIVE DFS
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let stack = [[root, 1]];
  let res = 1;

  while (stack.length) {
    let [node, depth] = stack.pop();

    if (node) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return res;
};
