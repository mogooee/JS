const num = 5;
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function VeryBigSum(ar) {
  let answer = 0;

  ar.forEach((element) => {
    answer += element;
  });

  return answer;
}

console.log(VeryBigSum(ar));
