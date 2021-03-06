// brute force: double for loop

// improved: nlogn
var binSearch = function(a, val) {
    let start = 0;
    let end = a.length - 1;
    let mid = Math.ceil((start + end) / 2);
    
    while (start <= end) {
        if (a[mid] === val) return mid;
        if (a[mid] < val) {
            start = mid + 1;
            mid = Math.ceil((start + end) / 2);
        } else {
            end = mid - 1;
            mid = Math.ceil((start + end) / 2);
        }
    }
    
    return null;
}

var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i += 1) {
        let searchVal = target - numbers[i];
        let compIdx = binSearch(numbers, searchVal);
        if (compIdx !== i && compIdx !== null) {
            return [i + 1, compIdx + 1];
        }
    }
};

// optimal O(n)
const twoSum = (numbers, target) => {
  let lo = 0;
  let hi = numbers.length - 1
  
  while (lo < hi) {
      let sum = numbers[lo] + numbers[hi];
      if (sum === target) return [lo + 1, hi + 1];
      if (sum < target) {
          lo += 1;
      } else {
          hi -= 1;
      }
  }
}