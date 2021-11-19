const grades = [73, 67, 38, 33];

function getGradeStudent(grades) {
  const answer = grades.map((score) => {
    let diff = 5 - (score % 5);
    if (diff < 3 && score >= 38) {
      score += diff;
    }
    return score;
  });
  return answer;
}

console.log(getGradeStudent(grades));
