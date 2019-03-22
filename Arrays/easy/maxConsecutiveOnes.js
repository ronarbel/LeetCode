var findMaxConsecutiveOnes = function(nums) {
  let maxOnes = 0;
  let oneCounter = 0;
  for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === 1) oneCounter += 1;
      if (nums[i] === 0) oneCounter = 0;
      maxOnes = Math.max(oneCounter, maxOnes);
  }
  
  return maxOnes;
};