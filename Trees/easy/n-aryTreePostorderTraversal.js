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
var postorder = function(root) {
  const result = [];
  const DFSPostOrder = (node) => {
      node.children.forEach(child => DFSPostOrder(child));
      result.push(node.val)
  }
  if (root) DFSPostOrder(root);
  return result;
};