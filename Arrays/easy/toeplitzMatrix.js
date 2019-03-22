var isToeplitzMatrix = function(matrix) {
    for (let row = 0; row < matrix.length; row += 1) {
        for (let col = 0; col < matrix[0].length; col += 1) {
            if (matrix[row + 1] && matrix[row + 1][col + 1] !== undefined) {
                if (matrix[row][col] !== matrix[row + 1][col + 1]) return false;
            }
        }
    }
    return true;
};

// -------- unique diagonal method -------- //
var isToeplitzMatrix = function(matrix) {
  const diagonals = {};
  for (let row = 0; row < matrix.length; row += 1) {
      for (let col = 0; col < matrix[0].length; col += 1) {
          
          let diagonal = row - col;
          if (diagonals[diagonal] === undefined) {
              diagonals[diagonal] = matrix[row][col];
          } else if (diagonals[diagonal] !== matrix[row][col]) {
              return false;
          }
          
      }
  }
  return true;
}