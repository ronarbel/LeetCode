// -------- brute force -------- //
var fairCandySwap = function(A, B) {
  let ASum = A.reduce((a, v) => a + v);
  let BSum = B.reduce((a, v) => a + v);
  
  for (let i = 0; i < A.length; i += 1) {
      for (let j = 0; j < B.length; j += 1) {
          let newASum = ASum - A[i] + B[j];
          let newBSum = BSum + A[i] - B[j];
          if (newASum === newBSum) {
              return [A[i], B[j]];
          }
      }
  }
};

