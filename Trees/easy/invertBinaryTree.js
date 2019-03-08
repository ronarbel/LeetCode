var invertTree = function(root) {
  if (!root) return root;
  let tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};