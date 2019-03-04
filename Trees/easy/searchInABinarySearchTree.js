/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
  return null;
};