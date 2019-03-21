// -------- initial solution ------- //
var findTarget = function(root, k) {
  let result = []
  const DFS = (node) => {
      let stack = [node];
      while (stack.length) {
          let current = stack.pop();
          result.push(current.val);
          if (current.right) stack.push(current.right);
          if (current.left) stack.push(current.left);
      }
  }
  DFS(root)
  
  const binSearch = (val, node) => {
      if (val === node.val) return true
      if (val < node.val && node.left) {
          return binSearch(val, node.left)
      }
      if (val > node.val && node.right) {
          return binSearch(val, node.right)
      }
      return false;
  }
  
  for (let i = 0; i < result.length; i += 1) {
      let searchValue = k - result[i];
      if (searchValue !== result[i]) {
        if (binSearch(searchValue, root)) return true;   
      }
  }
  return false
};