const findArea = (grid, row, col) => {
  if (row < 0 || row > grid.length - 1) return 0;
  if (col < 0 || col > grid[0].length - 1) return 0;
  if (grid[row][col] !== 1) return 0;
  
  grid[row][col] = -1
  
  let area = 1;
  area += findArea(grid, row - 1, col);
  area += findArea(grid, row + 1, col);
  area += findArea(grid, row, col - 1);
  area += findArea(grid, row, col + 1);
  
  return area;
}

var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  
  for (let row = 0; row < grid.length; row += 1) {
      for (let col = 0; col < grid[0].length; col += 1) {
          const cellValue = grid[row][col];
          
          if (cellValue === 1) {
              const curArea = findArea(grid, row, col);
              maxArea = Math.max(curArea, maxArea);
          }
      }
  }
  
  return maxArea;
};

const plot1 = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

console.log(maxAreaOfIsland(plot1)); // 6
