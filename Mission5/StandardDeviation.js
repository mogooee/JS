const table = [
  [
    0.5, 0.50399, 0.50798, 0.51197, 0.51595, 0.51994, 0.52392, 0.5279, 0.53188,
    0.53586,
  ],
  [
    0.53983, 0.5438, 0.54776, 0.55172, 0.55567, 0.55962, 0.5636, 0.56749,
    0.57142, 0.57535,
  ],
  [
    0.57926, 0.58317, 0.58706, 0.59095, 0.59483, 0.59871, 0.60257, 0.60642,
    0.61026, 0.61409,
  ],
  [
    0.61791, 0.62172, 0.62552, 0.6293, 0.63307, 0.63683, 0.64058, 0.64431,
    0.64803, 0.65173,
  ],
  [
    0.65542, 0.6591, 0.66276, 0.6664, 0.67003, 0.67364, 0.67724, 0.68082,
    0.68439, 0.68793,
  ],
  [
    0.69146, 0.69497, 0.69847, 0.70194, 0.7054, 0.70884, 0.71226, 0.71566,
    0.71904, 0.7224,
  ],
  [
    0.72575, 0.72907, 0.73237, 0.73565, 0.73891, 0.74215, 0.74537, 0.74857,
    0.75175, 0.7549,
  ],
  [
    0.75804, 0.76115, 0.76424, 0.7673, 0.77035, 0.77337, 0.77637, 0.77935,
    0.7823, 0.78524,
  ],
  [
    0.78814, 0.79103, 0.79389, 0.79673, 0.79955, 0.80234, 0.80511, 0.80785,
    0.81057, 0.81327,
  ],
  [
    0.81594, 0.81859, 0.82121, 0.82381, 0.82639, 0.82894, 0.83147, 0.83398,
    0.83646, 0.83891,
  ],
  [
    0.84134, 0.84375, 0.84614, 0.84849, 0.85083, 0.85314, 0.85543, 0.85769,
    0.85993, 0.86214,
  ],
];

const fs = require("fs");
let data = fs
  .readFileSync("Mission5/data.txt")
  .toString()
  .split("\n")
  .map((item) => +item);

//평균
function getMean(data) {
  let sum = 0;
  let avg = 0;
  data.forEach(function (element) {
    sum += element;
  });

  avg = sum / data.length;
  return avg.toFixed(2);
}

//console.log(getMean(data));

//표준편차: 분산에 루트를 씌운다.
// 분산 구하는 법
// 1. 평균으로 각 데이터의 편차를 구한다.
// 2. 편차들을 제곱한 다음 분산(편차 제곱의 평균)을 구한다.
// 3. 루트를 씌워서 표준편차를 구한다.

//표준편차
function getStandardDeviation(data) {
  let avg = getMean(data);
  let SumSquaresDeviation = 0;
  data.forEach(function (element) {
    SumSquaresDeviation += Math.pow(element - avg, 2);
  });
  //표본표준편차
  let variance = SumSquaresDeviation / (data.length - 1);

  let StandardDeviation = Math.sqrt(variance);
  return StandardDeviation.toFixed(2);
}

//위 데이터는 정규분포이다. 70-80점 사이의 값을 갖는 비율은 얼마인가?
//표준화 -> 표준정규분포 ; z값을 표준정규분포표에서 찾아 면적을 구한다.
// 70 이상이고 80 이하일 확률 = 80이하일 확률 - 70 이하일 확률

//표준화
function StandardNormalDistribution(data, a, b) {
  let avg = getMean(data);
  let StandardDeviation = getStandardDeviation(data);
  let z = {};
  // -1.00 이하 = 1.00이상 = 1-0.8413 = 0.1587 = 15.87%
  z.a = Number(((a - avg) / StandardDeviation).toFixed(2)); //-1
  // 0.27이하 = 0.6064 = 60.64%
  z.b = Number(((b - avg) / StandardDeviation).toFixed(2)); // 0.27

  return z;
}

//표준정규분포표에서 확률찾기
function Percentage(data, a, b) {
  let percentage = [];
  let result = 0;
  let z = StandardNormalDistribution(data, a, b);

  for (i = 0; i < Object.values(z).length; i++) {
    if (Object.values(z)[i] < 0)
      //행: 10을 곱한 일의 자리수 , 열: 100을 곱한 일의 자리수
      //z.a=-1, z.b=0.27
      percentage.push(
        (
          1 -
          table[Math.abs(parseInt(z.a * 10))][
            Math.abs(parseInt(z.a * 100)) % 10
          ]
        ).toFixed(5)
      );
    else percentage.push(table[parseInt(z.b * 10)][(z.b * 100) % 10]);
  }

  result = (percentage[1] - percentage[0]).toFixed(4);
  return result;
}

console.log(Percentage(data, 70, 80)); //44.78%
