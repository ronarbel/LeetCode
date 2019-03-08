var levelOrder = function(root) {
  if (!root) return [];

  const result = [];
  let queue = [root];

  while (queue.length) {
      const size = queue.length;
      const levelValues = [];

      for (let i = 0; i < size; i += 1) {
          let node = queue.shift();
          levelValues.push(node.val);
          if (node.children.length) queue = queue.concat(node.children); 
      }
      
      result.push(levelValues)
  }
  return result;
};