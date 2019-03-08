var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;
  const maxVal = Math.max(...nums);
  const maxIndex = nums.indexOf(maxVal);
  
  const root = new TreeNode(maxVal);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  
  return root;
};