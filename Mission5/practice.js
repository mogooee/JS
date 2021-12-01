const findProbability = require("./findProbability");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("과목은? ", (answer) => {
  console.log(
    `${answer}의 평균, 표준편차, 70점 이상 80점 이하일 확률을 구합니다.`
  );
  //reader.close();
});

rl.on("line", function (line) {
  const input = line.split(" ").map((item) => +item);

  console.log(input);
  console.log(findProbability.findProbability(input, 70, 80));

  rl.close();
}).on("close", function () {
  process.exit();
});
