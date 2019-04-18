var majorityElement = function(nums) {
  const numFrequencies = {};
  let res = nums[0];
  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (numFrequencies[num]) {
          numFrequencies[num] += 1;
      } else {
          numFrequencies[num] = 1;
      }
      
      if (numFrequencies[num] > numFrequencies[res]) res = num;
  }
  
  return res;
};