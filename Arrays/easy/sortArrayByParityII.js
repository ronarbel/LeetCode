var sortArrayByParityII = function(A) {
  for (let i = 0; i < A.length; i += 1) {
      let checkIdx = i + 1;
      while (A[i] % 2 !== i % 2) {
          if (A[checkIdx] % 2 === i % 2) {
              let currTemp = A[i];
              A[i] = A[checkIdx];
              A[checkIdx] = currTemp;
          }
          checkIdx += 1;
      }
  }
  return A;
};