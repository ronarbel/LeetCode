// O(nm) space and time
var transpose = function(A) {
  let result = [];
  for (let col = 0; col < A[0].length; col += 1) {
      let newRow = [];
      for (let row = 0; row < A.length; row += 1) {
          newRow.push(A[row][col]);
      }
      result.push(newRow);
  }
  return result;
};