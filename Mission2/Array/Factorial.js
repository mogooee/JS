const factorial = (n) => {
  return n > 1 ? n * factorial(n - 1) : 1;
};

const print = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(factorial(i));
  }
  return arr;
};

console.log(print(3));
