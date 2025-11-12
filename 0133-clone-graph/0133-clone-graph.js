/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    const map = new Map();

    function dfs(node) {
        if (map.has(node.val)) {
            return map.get(node.val)
        }

        const copy = new _Node(node.val);
        map.set(node.val, copy);

        for (let neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy

    }
    return dfs(node);
};