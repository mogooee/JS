class calculate {
  constructor(a, b, c) {
    this.a = a; //this는 실행될 때 결정된다. 달라질 수 있다!
    this.b = b;
    this.c = c;
  }
  plus() {
    this.console(this.a + this.b + this.c);
  }
  minus() {
    this.console(this.a - this.b - this.c);
  }
  console(result) {
    console.log(plus());
  }
}

//new 연산자를 이용해서 새로운 객체를 생성하는 함수를 생성자 함수라고 부릅니다
//obj의 prototype이라는 property안에 constructor, plus, minus, console, a, b, c가 들어간다.
const obj = new calculate(1, 2, 3);

console.log(obj); //this.a, this.b, this.c, this.console
obj.plus();
obj.minus(); //minus함수는 obj의 컨텍스트 범위 안에서 실행되었다.
