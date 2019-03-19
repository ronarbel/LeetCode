var flipAndInvertImage = function(a) {
  const flipImage = () => {
      for (let i = 0; i < a.length; i += 1) {
          const row = a[i];
          const midPoint = Math.floor(row.length / 2);
          let left = midPoint - 1;
          let right = null;
          row.length % 2 === 0 ? right = midPoint : right = midPoint + 1;
          
          while (left >= 0) {
              let tempLeft = row[left];
              row[left] = row[right];
              row[right] = tempLeft;
              left -= 1;
              right += 1;
          }
      }
  }
  
  const invertImage = () => {
      for (let i = 0; i < a.length; i += 1) {
          let row = a[i];
          for (let j = 0; j < row.length; j += 1) {
              row[j] === 0 ? row[j] = 1 : row[j] = 0;
          }
      }
  }
  flipImage();
  console.log(a)
  invertImage()
  return a;
};