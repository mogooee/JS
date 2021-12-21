const myReduce = (callback, arr, initialValue) => {
  let answer = 0;
  const calc = (arr) => {
    return arr.length === 0
      ? Number(initialValue) + answer
      : (answer += callback(calc(arr.splice(1)), arr[0]));
  };
  return calc(arr);
};

console.log(
  myReduce(
    (acc, cur) => {
      return acc + cur;
    },
    [1, 3, 10],
    []
  )
);
