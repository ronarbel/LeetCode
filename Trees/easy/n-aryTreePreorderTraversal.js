/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const result = [];
  const DFSPreOrder = (node) => {
      result.push(node.val);
      node.children.forEach(child => DFSPreOrder(child));
  }
  if (root) DFSPreOrder(root);
  return result;
};