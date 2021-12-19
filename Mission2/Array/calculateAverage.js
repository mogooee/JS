const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

const CalculateAvg = {
  personalAvg(grades) {
    return grades.map((e) => {
      let sum = 0;
      for (value of e) {
        sum += value;
      }
      return Number((sum / e.length).toFixed(2));
    });
  },
  highScoreAvg(grades) {
    let sum = 0;
    grades.map((e) => {
      sum += e.reduce((pre, cur) => {
        return pre > cur ? pre : cur;
      });
    });
    return sum / grades.length;
  },
};

console.log(CalculateAvg.personalAvg(grades));
console.log(CalculateAvg.highScoreAvg(grades));
