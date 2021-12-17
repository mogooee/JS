const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();
rl.on("line", function (input) {
  if (isQuitOrPrintOrInit(input)) return;
  let figureAndNumObj = separateFigureAndNum(input);
  let figure = figureAndNumObj.figure.join("");
  let num = figureAndNumObj.num;
  if (checkFigure(figure)) {
    if (checkNum(figure, num)) {
      getArea(figure, num);
    }
  }
});
rl.on("close", function () {
  process.exit();
});

let executionSequence = [];

const isQuitOrPrintOrInit = (input) => {
  switch (input) {
    case "quit":
      console.log("> 입력을 종료합니다.");
      rl.close();

    case "print":
      console.log(printExecutionSequence());

    case "init":
      initExecutionSequence();
      return 1;

    default:
      rl.prompt();
      return 0;
  }
};

const separateFigureAndNum = (input) => {
  const regexStr = input.match(/[a-z]+|[0-9]+/gi);
  const figure = regexStr.filter((e) => isNaN(e));
  const num = regexStr.filter((e) => !isNaN(e));
  return { figure, num };
};

const checkFigure = (figure) => {
  if (figure !== "circle" && figure !== "rect" && figure !== "trapezoid") {
    console.log("도형을 잘못 입력하셨습니다. 다시 입력하세요.");
    return 0;
  } else return 1;
};

const checkNum = (figure, num) => {
  switch (figure) {
    case "circle":
      if (num.length === 1 || num.length === 2) return 1;
      else break;
    case "rect":
      if (num.length === 2) return 1;
      else break;
    case "trapezoid":
      if (num.length === 3) return 1;
      else break;
  }
  console.log("숫자를 잘못 입력하셨습니다. 다시 입력하세요.");
  return 0;
};

const getArea = (figure, num) => {
  switch (figure) {
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
    return saveExecutionSequence("circle", sum);
  } else {
    return saveExecutionSequence("circle", num * num * Math.PI);
  }
};

const getRect = (num) => {
  return saveExecutionSequence("rect", num[0] * num[1]);
};

const getTrapezoid = (num) => {
  return saveExecutionSequence(
    "trapezoid",
    ((Number(num[0]) + Number(num[1])) * num[2]) / 2
  );
};

const saveExecutionSequence = (figure, area) => {
  let executionFunction = { figure, area };
  executionSequence.push(executionFunction);
  return;
};

const printExecutionSequence = () => {
  return executionSequence.flat();
};

const initExecutionSequence = () => {
  executionSequence = [];
  return;
};
