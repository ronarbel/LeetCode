const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i += 1) {
    let val = '';
    if (i % 3 === 0) val += 'fizz';
    if (i % 5 === 0) val += 'buzz';
    if (!val) val = i;
    console.log(val);
  }
};

console.log(fizzBuzz(20));
