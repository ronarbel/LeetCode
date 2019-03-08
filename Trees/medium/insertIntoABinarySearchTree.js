var insertIntoBST = function(root, val) {
  if (val < root.val) {
      if (!root.left) {
          root.left = new TreeNode(val);   
      } else {
          insertIntoBST(root.left, val);
      }
  }
  
  if (val > root.val) {
      if (!root.right) {
          root.right = new TreeNode(val);   
      } else {
          insertIntoBST(root.right, val);
      }
  }
  
  return root
};