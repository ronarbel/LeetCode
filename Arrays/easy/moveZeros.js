var moveZeroes = function(nums) {
  let zeroCounter = 0;
  for (let i = 0; i < nums.length; i += 1) {
      while (nums[i] === 0) {
          nums.splice(i, 1);
          zeroCounter += 1
      }
  }
  
  while (zeroCounter > 0) {
      nums.push(0);
      zeroCounter -= 1;
  }
  return nums;
};