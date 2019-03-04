/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const vals = [];
  const dfs = (node) => {
      vals.push(node.val);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
  }
  dfs(root);
  for (let i = 0; i < vals.length; i += 1) {
      if (vals[i] !== vals[0]) return false
  }
  return true;
};