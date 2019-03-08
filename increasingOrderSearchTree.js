var increasingBST = function(root) {
  const ans = new TreeNode(0);
  let cur = ans;
  const DFSInOrder = (node) => {
      if (node.left) DFSInOrder(node.left);
      node.left = null;
      cur.right = node;
      cur = node;
      if (node.right) DFSInOrder(node.right);
  }
  DFSInOrder(root);
  return ans.right;
}