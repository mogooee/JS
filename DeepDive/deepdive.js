// var temp = [1, 2, 3, 4];
// arr_arg = temp; // 깊은복사

// arr_arg = [1, 2, 3];
// console.log(temp);

// const obj = { x: 1, y: { k: 2 } };
// const copy = { ...obj }; //depth 2 까지 복사

// console.log(obj);
// copy.y.k = 4; //깊은복사니까  값이 바뀌어도 따라가지 않는다.
// console.log(obj);
// console.log(copy);
// console.log(obj === copy); //false

// const str = "Hello";

// const { length } = str;
// console.log(length);

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
