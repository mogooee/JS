/*
step 1. endNum의 숫자까지 people명이 말한다고 할 때 이를 모두 출력한다.
-[V] endNum까지 toString을 이용하여 radix를 변환한다. 
-[V] 변환한 숫자를 split으로 하나씩 쪼갠다.
-[V] allNum 배열에 하나씩 쪼갠 숫자를 모두 모아 담는다.

step 2. 길동이 차례에 어떤 숫자를 말해야 하는지 알 수 있는 프로그램을 만든다.

-[V] 인원수에 따라 player 객체를 배열로 초기화한다.
-[V] allNum 요소의 각각 인덱스를 인원수만큼 나눈 나머지를 player 객체의 key값으로 하고 요소를 value로 담는다.
-[V] player 객체를 출력한다. 

step 3. 길동이의 순서가 주어진다.
-[V] player 객체에서 길동이의 순서를 key값으로하는 value를 출력한다.
*/

const splitAllNum = (radix, endNum) => {
  let allNum = [];
  for (let num = 0; num <= endNum; num++) {
    let changeRadix = num.toString(radix).split("");
    allNum.push(...changeRadix);
  }
  return allNum;
};

const initPlayerNum = (people) => {
  let player = {};
  for (let i = 1; i <= people; i++) {
    player[i] = [];
  }
  return player;
};

const splitPlayerNum = (allNum, player, people) => {
  allNum.forEach((e, i) => {
    player[(i % people) + 1].push(e);
  });
  return player;
};

const solution = (radix, endNum, people, gilDong) => {
  let allNum = splitAllNum(radix, endNum);
  let player = initPlayerNum(people);
  let playerNum = splitPlayerNum(allNum, player, people);
  return playerNum[gilDong];
};

console.log(solution(2, 4, 3, 2));
