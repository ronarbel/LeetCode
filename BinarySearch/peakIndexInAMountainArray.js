// linear
var peakIndexInMountainArray = function(A) {
    for (let i = 1; i < A.length - 1; i += 1) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) return i;
    }
// };

// log n
var peakIndexInMountainArray = function(A) {
  let start = 0;
  let end = A.length - 1;
  let mid = Math.floor((start + end) / 2);
  
  while (start <= end) {
      if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
          return mid;
      } else if (A[mid] < A[mid + 1]) {
          start = mid + 1;
          mid = Math.floor((start + end) / 2);
      } else {
          end = mid - 1;
          mid = Math.floor((start + end) / 2);
      }
  }
}