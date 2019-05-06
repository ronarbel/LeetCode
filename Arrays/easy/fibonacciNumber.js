const fib = (N) => {
  if (N < 1) return 0;
  if (N === 1 || N === 2) return 1;

  let prevPrevNum = 1;
  let prevNum = 1;
  let current = prevNum + prevPrevNum;

  while (N > 3) {
    prevPrevNum = prevNum;
    prevNum = current;
    current = prevNum + prevPrevNum;
    N -= 1;
  }

  return current;
};

console.log(fib(5));
