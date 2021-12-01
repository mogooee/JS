const array1 = ["a", "b", "c"];

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

const print = (element) => console.log(element);
forEach(array1, print);

// 배열문제 하자...
// const myReduce = (arr, callback, initialValue) => {
//     //여기에 구현
// }

// const result = myReduce(arr, (next,prev) => {...}, []);
