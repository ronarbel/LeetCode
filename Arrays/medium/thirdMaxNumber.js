var thirdMax = function(nums) {
  nums = nums.sort((a, b) => b - a);
  let maxCounter = 1;
  let max = nums[0];
  let thirdMax = nums[0]
  for (let i = 1; i < nums.length; i += 1) {
      if (maxCounter === 3) break;
      if (nums[i] < thirdMax) {
          thirdMax = nums[i]
          maxCounter += 1
      }
  }
  if (maxCounter === 3) {
      return thirdMax;
  } else {
      return max;
  }
};