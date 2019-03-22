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

// suboptimal solution
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        if (nums[i] === 0) nums.push(nums.splice(i, 1));
    }
    return nums;
}

// -------- O(n) time O(1) space -------- //
var moveZeroes = function(nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] !== 0) {
          nums[idx] = nums[i];
          nums[i] = idx === i ? nums[i] : 0;
          idx += 1;
      }
  }
  return nums;
}