// -------- initial solution -------- //
var maxDepth = function(root) {
  if (!root) return 0;
  const findDepth = (curDepth, node) => {
      let tempDepth = curDepth;
      if (node.right) tempDepth = Math.max(findDepth(curDepth + 1, node.right), tempDepth);
      if (node.left) tempDepth = Math.max(findDepth(curDepth + 1, node.left), tempDepth);
      
      return tempDepth
  }
  return findDepth(1, root);
};