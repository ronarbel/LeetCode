// problem solution
// var intersect = function(nums1, nums2) {
//   let nums1Count = {};
//   for (let i = 0; i < nums1.length; i += 1) {
//       if (!nums1Count[nums1[i]]) {
//           nums1Count[nums1[i]] = 1;
//       } else {
//           nums1Count[nums1[i]] += 1;
//       }
//   }
  
//   const result = [];
//   for (let i = 0; i < nums2.length; i += 1) {
//       if (nums1Count[nums2[i]]) {
//           result.push(nums2[i]);
//           nums1Count[nums2[i]] -= 1;
//       }
//   }
  
//   return result;
// };

// if array is sorted
var intersect = function(nums1, nums2) {
    let oneIdx = 0;
    let twoIdx = 0;
    const res = [];
    while (oneIdx < nums1.length && twoIdx < nums2.length) {
        if (nums1[oneIdx] === nums2[twoIdx]) {
            res.push(nums1[oneIdx]);
            oneIdx += 1;
            twoIdx += 1;
        } else if (nums1[oneIdx] < nums2[twoIdx]) {
            oneIdx += 1;
        } else {
            twoIdx += 1;
        }
    }
    return res;
}

const nums1 = [1,1,2,2];
const nums2 = [2,2];

console.log(intersect(nums1, nums2)) // [2,2]

const nums3 = [4,5,9];
const nums4 = [4,4,8,9,9];

console.log(intersect(nums3, nums4)) // [4,9]