/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  
  let max = 0;
  for (let i = 0; i < root.children.length; i += 1) {
      max = Math.max(max, maxDepth(root.children[i]))
  }
  
  return max + 1;
};