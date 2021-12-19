/*
Input = 이중객체, 외부파일 
Output = 숫자타입으로만 구성된 요소를 뽑아 배열 만들기 
*/

const data = require("./data.js");
const isObject = (target) => {
  return target instanceof Object;
};

const isNumber = (obj) => {
  let result = [];
  for (key in obj) {
    if (!isNaN(obj[key])) {
      result.push(key);
    }
  }
  return result;
};

const findNumElement = (data) => {
  let result = [];
  for (key in data) {
    if (isObject(data[key])) {
      result.push(isNumber(data[key]));
    } else {
      if (!isNaN(data[key])) result.push(key);
    }
  }
  return result.join().split(",");
};

console.log(findNumElement(data));
