// brute force: double for loop
// O(2n) put nums into obj, iterate nums again to check if difference from target exists

// edge cases: two of same value 1/2 of target // [7, 7]; t = 14
// >> handled, second index gets stored in cache

// O(1n) optimal solution: look up, then insert
var twoSum = function(nums, target) {
  const cache = {};
  
  for (let i = 0; i < nums.length; i += 1) {
      let searchVal = target - nums[i];
      
      if (cache[searchVal] !== undefined && i !== cache[searchVal]) {
          return [i, cache[searchVal]];
      }
      
      cache[nums[i]] = i;
  }
};