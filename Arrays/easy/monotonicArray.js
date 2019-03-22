var isMonotonic = function(A) {
  // find differing values
  let firstVal = A[0];
  let secondVal = A[0];
  for (let i = 0; i < A.length; i += 1) {
      if (A[i] !== firstVal) {
          secondVal = A[i];
          break;
      }
  }
  
  if (firstVal > secondVal) {
      return isDecreasing(A);
  } else if (firstVal < secondVal) {
      return isIncreasing(A);
  } else {
      return true;
  }
};