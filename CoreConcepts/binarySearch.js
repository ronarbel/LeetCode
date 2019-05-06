const search = (searchValue, a) => {
  let start = 0;
  let end = a.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (start <= end) {
    const currentValue = a[mid];

    if (currentValue === searchValue) {
      return true;
    }
    if (currentValue < searchValue) {
      start = mid + 1;
      mid = Math.floor((end + start) / 2);
    }
    if (currentValue > searchValue) {
      end = mid - 1;
      mid = Math.floor((end + start) / 2);
    }
  }

  return false;
};

console.log(search(3, [1, 2, 3, 4, 5, 6])); // true
console.log(search(9, [1, 2, 3, 4, 5, 6])); // false
console.log(search(6, [1, 2, 3, 4, 5, 6])); // true
