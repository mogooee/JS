function solution(dartResult) {
  var answer = 0;
  let answerArray = [];

  const array = dartResult.split("");
  let regexStr = dartResult.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);

  const number = regexStr.filter((e) => !isNaN(e));
  const calc = array.filter((e) => isNaN(e));

  calc.forEach((e, i) => {
    switch (e) {
      case "S":
        answerArray.push(number[0] * 1);
        number.shift();
        break;
      case "D":
        answerArray.push(number[0] ** 2);
        number.shift();
        break;
      case "T":
        answerArray.push(number[0] ** 3);
        number.shift();
        break;
      case "*":
        //남은 number의 길이에 따라
        if (number.length == 2) {
          answerArray[0] *= 2;
        } else if (number.length == 1) {
          answerArray[0] *= 2;
          answerArray[1] *= 2;
        } else if (number.length == 0) {
          answerArray[1] *= 2;
          answerArray[2] *= 2;
        }
        break;
      case "#":
        //남은 number가 2개면 anser 0,
        if (number.length == 2) {
          answerArray[0] *= -1;
        } else if (number.length == 1) {
          answerArray[1] *= -1;
        } else if (number.length == 0) {
          answerArray[2] *= -1;
        }
        break;
    }
  });
  answer = answerArray.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(answer);
  return answer;
}

solution("1D2S#10S");
