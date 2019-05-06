const fib = (n) => {
  if (n < 1) return 0;
  if (n === 1 || n === 2) return 1;

  let prevPrevNum = 1;
  let prevNum = 1;
  let current = prevNum + prevPrevNum;

  while (n > 3) {
    prevPrevNum = prevNum;
    prevNum = current;
    current = prevNum + prevPrevNum;
    n -= 1;
  }

  return current;
};

console.log(fib(5));