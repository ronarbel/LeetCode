var sumEvenAfterQueries = function(A, queries) {
  const result = [];
  let queryResult = 0;
  for (let i = 0; i < A.length; i += 1) {
      if (A[i] % 2 === 0) queryResult += A[i];
  }
  
  for (let i = 0; i < queries.length; i += 1) {
      const val = queries[i][0];
      const index = queries[i][1];
      
      if (A[index] % 2 === 0) {
          queryResult -= A[index];            
      }
      
      A[index] += val;
      if (A[index] % 2 === 0) {
          queryResult += A[index];
      }
      
      result.push(queryResult);
  }
  return result;
};