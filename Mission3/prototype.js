// const calculate new Calculate(2,3);
// calculate.add();

//두 값을 입력받는 Calculate 함수
function Calculate(a, b) {
  //class의 constructor
  this.a = a;
  this.b = b;
}

//prototype객체에 add 함수 추가
Calculate.prototype.add = function () {
  this.result = this.a + this.b;
};

Calculate.prototype.print = function () {
  console.log(this.result);
};

//Calculate 함수에 2와 3을 넣고 호출하고, calculate라는 객체를 만든다.
const calculate = new Calculate(2, 3);

//console.log(calculate); // {a: 2, b: 3}

//calculate객체에 add, print함수를 실행
calculate.add();
calculate.print();
