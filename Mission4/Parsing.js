const data = "[1, 2, [3, 4, [5, [6]]]]"; //string

function IsArray(data) {
  let count = { open: 0, close: 0 };
  for (let i = 0; i < data.split("").length; i++) {
    if (data.split("")[i] === "[") count.open++;
    else if (data.split("")[i] === "]") count.close++;
  }

  if (count.open !== count.close) console.log("배열이 아닙니다");
  else {
    console.log("배열이 맞습니다");
    this.dataArr = JSON.parse(data); //array
    this.FlatArr = JSON.parse(data).flat(Infinity);
    run(dataArr);
  }
}

//배열이 1개부터 시작
let count = 1;

function run(data) {
  let ResultArr = [];

  count++;

  //하나씩 flat
  ResultArr = data.flat();
  //console.log(ResultArr);

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

IsArray(data);
