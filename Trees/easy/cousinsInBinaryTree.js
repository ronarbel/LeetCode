var isCousins = function(root, x, y) {
  const parents = {};
  const depth = {};
  const dfs = (node, parent) => {
      // set depth of current node based on depth its parent node + 1
      if (!parent) {
          depth[node.val] = 0;
      } else {
          depth[node.val] = 1 + depth[parent.val];
      }
      
      // store nodes parent node
      parents[node.val] = parent;
      
      if (node.left) dfs(node.left, node);
      if (node.right) dfs(node.right, node);
  }
  dfs(root, null)
  return depth[x] === depth[y] && parents[x] !== parents[y]
};