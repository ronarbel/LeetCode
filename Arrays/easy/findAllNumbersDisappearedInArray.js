// linear time, linear space
// var findDisappearedNumbers = function(nums) {
//     let unseenDigits = [];
//     for (let i = 1; i <= nums.length; i += 1) {
//         unseenDigits.push(i);
//     }
    
//     for (let i = 0; i < nums.length; i += 1) {
//         const seenDigit = nums[i];
//         unseenDigits[seenDigit - 1] = null;
//     }
    
//     return unseenDigits.filter(e => e !== null);
// };

// linear time, constant space
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
      const seenDigit = Math.abs(nums[i]);
      const markedElement = seenDigit - 1;
      if (nums[markedElement] > 0) {
          nums[markedElement] = -nums[markedElement];            
      }
  }
  
  const res = [];
  for (let i = 0; i < nums.length; i += 1) {
      const digit = nums[i];
      if (digit > 0) {
          res.push(i + 1);
      }
  }
  return res;
}
