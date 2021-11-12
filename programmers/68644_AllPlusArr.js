/*
1.이중포문으로 원소끼리 모두 더한다.
2. 같은 원소끼리는 cotinue로 더하기를 실행하지 않는다.
3. 배열의 중복된 값을 제거한다.
4. 오름차순 정렬 후 출력한다. 
*/

function solution(numbers) {
  var answer = [];
  let AllPlusArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      AllPlusArr.push(numbers[i] + numbers[j]);
    }
  }

  AscendingCheck(AllPlusArr);
  answer = Array.from(new Set(AllPlusArr)); //중복제거 함수 Set()
  // console.log(answer);
  return answer;
}

function AscendingCheck(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
}

solution([2, 1, 3, 4, 1]);
