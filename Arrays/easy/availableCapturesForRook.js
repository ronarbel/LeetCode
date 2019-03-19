var numRookCaptures = function(board) {
  // iterate to find rook
  let rookPosition = {row: null, col: null}
  for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
          if (board[i][j] === 'R') {
              rookPosition.row = i;
              rookPosition.col = j;
          }
      }
  }
  
  let result = 0;
  
  // search left
  let left = rookPosition.col - 1;
  while (left >= 0) {
      let square = board[rookPosition.row][left];
      if (square === 'B') break;
      if (square === 'p') {
          result += 1;
          break;
      }
      left -= 1;
  }
  
  // search right
  let right = rookPosition.col + 1;
  while (right < board[0].length) {
      let square = board[rookPosition.row][right];
      if (square === 'B') break;
      if (square === 'p') {
          result += 1;
          break;
      }
      right += 1;
  }
  
  // search up
  let up = rookPosition.row - 1;
  while (up >= 0) {
      let square = board[up][rookPosition.col];
      if (square === 'B') break;
      if (square === 'p') {
          result += 1;
          break;
      }
      up -= 1;
  }
  
  // search down
  let down = rookPosition.row + 1;
  while (down < board.length) {
      let square = board[down][rookPosition.col];
      if (square === 'B') break;
      if (square === 'p') {
          result += 1;
          break;
      }
      down += 1;
  }
  
  return result;
};