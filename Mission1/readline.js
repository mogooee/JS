const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();
rl.on("line", (input) => {
  isQuit(input);

  const regexStr = input.match(/[a-z]+|[0-9]+/gi);
  const figure = regexStr.filter((e) => isNaN(e));
  const num = regexStr.filter((e) => !isNaN(e));

  getArea(figure, num);
  console.log(printExecutionSequence());
});

let executionFunctionArray = [];

const isQuit = (input) => {
  switch (input) {
    case "quit":
      console.log("> 입력을 종료합니다.");
      rl.close();
      return;
    default:
      rl.prompt();
  }
};

const checkFigure = (figure) => {
  if (
    figure.join() !== "circle" &&
    figure.join() !== "rect" &&
    figure.join() !== "trapezoid"
  ) {
    console.log("도형을 잘못 입력했습니다. 다시 입력하세요.");
    return;
  }
};

const checkNum = (figure, num) => {
  switch (figure.join()) {
    case "circle":
      if (num.length > 2) break;
      else return;
    case "rect":
      if (num.length !== 2) break;
      else return;
    case "trapezoid":
      if (num.length !== 3) break;
      else return;
    default:
      if (num.lenth === 0) break;
      else return;
  }
  console.log("숫자를 잘못 입력하셨습니다. 다시 입력하세요.");
  return;
};

const getArea = (figure, num) => {
  checkFigure(figure);
  checkNum(figure, num);
  switch (figure.join()) {
    case "circle":
      return getCircle(num);
    case "rect":
      return getRect(num);
    case "trapezoid":
      return getTrapezoid(num);
  }

  return;
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
  return `계산수행순서: ${JSON.stringify(executionFunctionArray)}`;
};

//node .\Mission1\readline.js
