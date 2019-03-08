var averageOfLevels = function(root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
      const size = queue.length;
      let sum = 0;
      for (let i = 0; i < size; i += 1) {
          let node = queue.shift();
          sum += node.val;
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      result.push(sum/size);
  }
  return result;
};