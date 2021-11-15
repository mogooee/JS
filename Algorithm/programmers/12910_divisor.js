/*
[12910] 나누어 떨어지는 숫자 배열

Input: 자연수를 담은 길이 1 이상인 배열 
Output: 자연수인 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열 

1. Input인 arr배열의 원소를 forEach 함수를 이용해 하나씩 읽어 들인다. 
2. 원소의 값을 divisor로 나눈 나머지가 0인 원소만 push함수로 answer배열에 따로 담아낸다.
3. answer 배열이 비었다면 -1을 넣어주고, 비어있지 않다면 오름차순 정렬하는 함수를 호출한다.
4. 두 원소의 차이를 sort() 함수의 파라미터로 전달하여, 배열을 오름차순으로 정렬한다.
4-1.   a > b이면 1, a == b이면 0, a < b이면 -1을 리턴하여,
주어진 배열을 오름차순으로 정렬
*/

function solution(arr, divisor) {
  var answer = [];

  arr.forEach(function (element) {
    if (element % divisor === 0) {
      answer.push(element);
    }
  });

  if (answer.length === 0) answer.push(-1);
  else AscendingCheck(answer);

  console.log(answer);
  return answer;
}

function AscendingCheck(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
