let executionFunctionArray = [];

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
  if (num[1]) {
    let sum = 0;
    for (let i = num[0]; i <= num[1]; i++) {
      sum += i * i;
    }
    saveExecutionSequence("circle", sum);
    return sum;
  } else {
    saveExecutionSequence("circle", num * num * Math.PI);
    return num * num * Math.PI;
  }
};

const getRect = (num) => {
  saveExecutionSequence("rect", num[0] * num[1]);
  return num[0] * num[1];
};

const getTrapezoid = (num) => {
  saveExecutionSequence("trapezoid", ((num[0] + num[1]) * num[2]) / 2);
  return ((num[0] + num[1]) * num[2]) / 2;
};

const saveExecutionSequence = (figure, area) => {
  let executionFunction = { figure, area };
  executionFunctionArray.push(executionFunction);
  return;
};

const printExecutionSequence = () => {
  return `계산수행순서: ${JSON.stringify(executionFunctionArray, null, 2)}`;
};

getCircle(2);
getArea("circle", 10);
getArea("rect", 10, 15);
getArea("trapezoid", 10, 15, 12);
getArea("circle", 1, 2);

console.log(printExecutionSequence());
