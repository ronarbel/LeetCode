var pruneTree = function(root) {
  const containsOne = (node) => {
      if (!node) return false;
      let leftSide = containsOne(node.left);
      let rightSide = containsOne(node.right);
      
      if (!leftSide) node.left = null;
      if (!rightSide) node.right = null;
      
      return node.val === 1 || leftSide || rightSide;
  };
  
  return containsOne(root) ? root : null;
};