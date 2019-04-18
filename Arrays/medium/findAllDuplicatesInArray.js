// linear time, linear space
var findDuplicates = function(nums) {
  const counter = {}
  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (counter[num] === undefined) {
          counter[num] = 1;
      } else {
          counter[num] += 1;
      }
  }
  
  let res = [];
  for (let num in counter) {
      if (counter[num] === 2) {
          res.push(num);
      }
  }
  return res;
};