/**
 * @param {number[]} nums input: 숫자 배열
 * @param {number} target input: 배열 중에 두 개를 더한 값
 * @return {number[]} output: 두 숫자의 합이 target과 동일한 두 숫자의 인덱스
 */

var twoSum = function (nums, target) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }

  return answer;
};

// ** map을 이용한 풀이 **

// var twoSum = function (nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const another = target - nums[i]; //3

//     if (another in map) {
//       return [map[another], i]; //0, 2
//     }
//     //똑같은 값이 있어도 기존에 저장된 값을 map[another]에서 찾고
//     //현재 값은 i로 출력하므로 겹치지 않는다..
//     map[nums[i]]=i; //map[3]=0, map[2]=1, map[3]=2;
//   }
// };

// console.log(twoSum([3, 2, 3], 6));
