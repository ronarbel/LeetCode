var leafSimilar = function(root1, root2) {
  const leafValueSequence = (root) => {
      const result = [];
      const DFLeafS = (node) => {
          if (node.left) DFLeafS(node.left);
          if (node.right) DFLeafS(node.right);
          if (!node.left && !node.right) result.push(node.val);
      }
      DFLeafS(root);
      return result;
  }
  const sequence1 = leafValueSequence(root1);
  const sequence2 = leafValueSequence(root2);
  for (let i = 0; i < sequence1.length; i += 1) {
      if (sequence1[i] !== sequence2[i]) return false;
  }
  return true;
};