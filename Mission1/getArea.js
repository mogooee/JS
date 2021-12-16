let executionFunction = [];

const getArea = (figure, ...num) => {
  switch (figure) {
    case "circle":
      return getCircle(num);
    case "rect":
      return getRect(num);
    case "trapezoid":
      return getTrapezoid(num);
  }
};

const getCircle = (num) => {
  saveExecutionSequence("circle");
  if (num[1]) {
    let sum = 0;
    for (let i = num[0]; i <= num[1]; i++) {
      sum += i * i;
    }
    return sum;
  } else return num * num * Math.PI;
};

const getRect = (num) => {
  saveExecutionSequence("rect");
  return num[0] * num[1];
};

const getTrapezoid = (num) => {
  saveExecutionSequence("trapezoid");
  return ((num[0] + num[1]) * num[2]) / 2;
};

const saveExecutionSequence = (figure) => {
  executionFunction.push(figure);
  return;
};

const printExecutionSequence = () => {
  return `계산수행순서: ${executionFunction}`;
};

console.log(getCircle(2));
console.log(getArea("circle", 10));
console.log(getArea("rect", 10, 15));
console.log(getArea("trapezoid", 10, 15, 12));
console.log(getArea("circle", 1, 2));

console.log(printExecutionSequence());
