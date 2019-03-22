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

// O(An + Bn)
var fairCandySwap = function(A, B) {
  let ASum = A.reduce((a, v) => a + v); // 8
  let BSum = B.reduce((a, v) => a + v); // 6
  
  let BVals = new Set (B);
  
  for (let i = 0; i < A.length; i += 1) { // 5        
      let neededBVal = A[i] + (BSum - ASum) / 2
      
      if (BVals.has(neededBVal)) {
          return [A[i], neededBVal2];
      }
  }
};