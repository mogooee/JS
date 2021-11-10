const data = "[1, 2, [3, 4, [5, [6]]]]"; //string
const dataArr = JSON.parse(data); //array
//console.log(dataArr);
const FlatArr = JSON.parse(data).flat(Infinity);
// const ResultArr = JSON.parse(data).flat(4);

// console.log(FlatArr);
// console.log(JSON.parse(data).flat(4));
// console.log(JSON.parse(data).flat(4) === FlatArr);
// console.log(JSON.stringify(FlatArr) === JSON.stringify(ResultArr));

//배열이 1개부터 시작
let count = 1;

function run(data) {
  let ResultArr = [];

  count++;

  //하나씩 flat
  ResultArr = data.flat();
  console.log(ResultArr);

  console.log(count);

  //중첩을 모두 풀었을 때와 같으면 종료
  if (JSON.stringify(FlatArr) === JSON.stringify(ResultArr)) {
    console.log(`원소의 개수: ${ResultArr.length}`);
    console.log(`depth: ${count}`);
    return count;
  }

  // 같지 않으면 재귀함수
  else {
    run(ResultArr);
  }
}

run(dataArr);

///////////////////////////////////////
