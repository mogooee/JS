function solution(answers) {
  var answer = [];

  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = { student1: 0, student2: 0, student3: 0 };

  //각 배열의 길이 만큼 지속적으로 반복하기 위해 i%배열의 길이
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % student1.length]) score.student1++;
    if (answers[i] === student2[i % student2.length]) score.student2++;
    if (answers[i] === student3[i % student3.length]) score.student3++;
  }

  for (let i = 0; i < Object.values(score).length; i++) {
    // console.log(Math.max(...Object.values(score)));
    if (Math.max(...Object.values(score)) === Object.values(score)[i])
      answer.push(i + 1);
  }
  //console.log(answer);

  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
