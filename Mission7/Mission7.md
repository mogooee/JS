# 생성자 함수

객체를 객체 리터럴`{}` 이외에도 다양한 방법으로 생성할 수 있다. 그 중 생성자 함수를 사용하여 객체를 생성하는 방식이 있다. **생성자 함수란 new 연산자와 함께 호출하면 객체(인스턴스)를 생성하는 함수를 말한다.** 생성자 함수에 의해 생성된 객체를 **인스턴스**라 한다.일반 함수와 동일한 방법으로 정의하고 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 일반 함수로 동작한다.

```js
const person = new Object();

//new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
```

_❓왜 간편한 객체리터럴이 아닌 생성자 함수로 객체를 만들까?_

객체리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만 단 하나의 객체만 생성하므로 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율 적이다. (객체는 프로퍼티를 통해 객체 고유의 상태를 표현하고 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.)  
**생성자 함수에 의한 객체 생성 방식은 마치 템플릿(클래스)처럼 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.**

생성자 함수는 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 따라서 생성자 함수 내부에서 return문을 이용해 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손하는 것이므로 **return문을 반드시 생략**해야 한다.

## # constructor

함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[call]]이 호출되고 **new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[construct]]가 호출**된다. 내부 메서드 [[call]]을 갖는 함수 객체를 callable(호출할 수 있는 객체)이라 하며, **내부 메서드 [[construct]]를 갖는 함수 객체를 constructor(생성자 함수로서 호출할 수 있는 함수)**, [[construct]]를 갖지 않는 함수 객체를 non-constructor(생성자 함수로서 호출할 수 없는 함수)라고 부른다. 모든 함수는 callable이지만 constructor일 수도 있고 non-constructor일 수도 있다.

- constructor 함수: 함수 선언문, 함수 표현식, 클래스
- non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수

```js
//일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};

//일반 함수로서 호출
//[[Call]]이 호출된다.
foo();

//프로퍼티 x에 할당된 값은 일반 함수로 정의 된 함수이므로 메서드로 인정하지 않는다.
const baz = {
  x: function () {},
};

//일반 함수로 정의된 함수만이 constructor다.
//[[Constructor]]가 호출된다.
new foo(); //foo{}
new bar(); //bar{}
new baz.x(); // x{}

//화살표 함수 정의
const arrow = () => {};

new arrow(); //TypeError: arrow is not a constructor

//메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
  x() {},
};

new obj.x(); //TypeError: obj.x is not a constructor
```

## # new연산자

일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. (생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명한다.) new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.

## # new.target

**new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.** new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.

```js
//생성자 함수
function Circle(radius) {
  //이 함수가 new 연산자와 함께 호출되지 않았다면 undefined
  if (!new.target) {
    // 재귀호출하여 생성된 인스턴스를 반환
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());
```

new.target은 ES6에서 도입된 최신 문법으로 IE에서는 지원하지 않는다. new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴(Scope-Safe Constructor Pattern)을 사용할 수 있다.

```js
function Circle(radius) {
  // 1. 생성자 함수가 new 연산자와 함께 호출되면 빈 객체를 생성하고 this에 바인딩하므로 this와 Circle은 연결된다.

  //2. 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리키므로 this와 Circle은 프로토타입에 의해 연결되지 않는다.
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter()); //10
```

<br>

# This

**this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.** this 바인딩(식별자와 값을 연결하는 과정)은 호출 방식에 따라 동적으로 결정된다.
(함수의 상위 스코프를 결정하는 방식인 *렉시컬 스코프*는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. 하지만 this 바인딩은 *함수 호출 시점*에 결정된다.)

1. 일반 함수로서 호출: 전역 객체
   - 메서드 내에서 정의한 중첩 함수나 콜백 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.  
     <br>
2. 메서드로서 호출: 메서드를 호출한 객체(마침표 앞의 객체)
3. 생성자 함수로서 호출: 생성자 함수가 생성할 인스턴스
4. Function.prototype.apply/call/bind메서드에 의한 간접 호출

this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다. 따라서 일반 함수 내부에서는 this 함수를 사용할 필요가 없으므로 `strict mode`가 적용된 일반 함수 내부의 this에는 undefined가 바인딩 된다.

```js
function foo() {
  console.log(this);
}

//1. 일반 함수로서 호출
//foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo(); // window

obj.foo();

//2. 메서드로서 호출
//foo 함수를 프로퍼티 값으로 할당하여 호출
//foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); //obj

//3. 생성자 함수로서 호출
//foo 함수를 new 연산자와 함께 생성자 함수로 호출
//foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
const inst = new foo(); //inst

//4. Function.prototype.apply/call/bind메서드에 의한 간접 호출
//foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };

foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar
```

1. 일반 함수 호출

메서드 내에서 정의한 중첩 함수나 콜백 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 **전역 객체가 바인딩**된다. 하지만 중첩 함수나 콜백 함수는 외부 함수를 돕는 헬퍼 함수의 역할을 하므로 외부 함수인 메서드와 this 바인딩이 일치하지 않는 다는 것은 헬퍼 함수로의 동작을 어렵게 한다.

이를 해결하기 위해 세가지 방법을 사용한다.

- 변수 `that`에 외부 함수의 `this` 바인딩을 할당하여 콜백 함수나 중첩함수 내부에서 `this` 대신 `that`을 참조하고 `this` 바인딩을 일치시킴
- Function.prototype.apply/call/bind 메서드에 의한 간접호출
- 화살표 함수

```js
// 콜백함수가 일반 함수로 호출
// 콜백 함수의 내부의 this는 전역 객체가 바인딩된다.
var value = 1;

const obj = {
  value: 10,
  foo() {
    console.log(this); // {value: 100, foo:f}

    //1. this 바인딩(obj)을 변수 that에 할당
    const that = this;

    //콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log(this); //window
      console.log(this.value); //1

      console.log(that.value); //10
    }, 100);

    //2.Function.prototype.apply/call/bind 메서드에 의한 간접호출
    setTimeout(
      function () {
        console.log(this.value); //10
      }.bind(this),
      100
    );
    //3. 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100);
  },
};

obj.foo();
```

2.  메서드 호출

    메서드는 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체다. 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수도 있다. (일반 함수로 호출된 메서드 함수 내부의 this는 전역 객체 window에 바인딩 된다.) **메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.**

3.  생성자 함수 호출

    **생성자 함수(인스턴스를 생성하는 함수) 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.**

4.  Function.prototype.apply/call/bind 메서드에 의한 간접 호출

    이들 메서드는 모든 함수가 상속받아 사용할 수 있다.

    - apply와 call

      this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다. apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달하고 call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.

      ```js
      function getThisBinding() {
        console.log(arguments);
        return this;
      }

      //this로 사용할 객체
      const thisArg = { a: 1 };

      console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
      console.log(getThisBinding.call(thisArg, 1, 2, 3));
      ```

    - bind

      apply와 call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달한다.

      ```js
      const person = {
        name: "Lee",
        foo(callback) {
          setTimeout(callback, 100);

          //bind 메서드로 callback 함수 내부의 this에 바인딩을 전달
          setTimeout(callback.bind(this), 100);
        },
      };

      person.foo(function () {
        //일반함수로 호출된 콜백 함수
        console.log(this.name); //window.name // Lee
      });
      ```

<br>

# Class

- 데이터가 들어있지 않고 틀만 정의 한 것이다.
- 클래스로 새로운 인스턴스를 만들면 Object가 된다.
- new 연산자 없이 호출할 수 없다.
- 암묵적으로 모든 코드에 strict mode가 지정되어 실행되며 해제할 수 없다.
- constructor(생성자), 프로토타입 메서드, 정적 메서드 세가지를 정의할 수 있다.
- static 메서드는 프로토타입 메서드와 달리 인스턴스 없이 클래스로 호출한다. 인스턴스 프로퍼티를 참조할 수 없다.
- get, set //게터: 값을 얻는 것, 세터: 값을 할당하는 것 innerText는 게터, 세터 둘 다 된다!

<br>

# 상속에 의한 클래스 확장

상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것이다. 클래스는 생성자 함수와 달리 상속을 지원하는 extends와 super 키워드를 제공한다.

- extends
  수퍼크래스와 서브클래스 간의 상속 관계를 설정한다.

  ```js
  class Animal {
    eat() {
      return "eat";
    }
  }

  class Bird extends Animal {
    fly() {
      return "fly";
    }
  }

  const bird = new Bird();

  console.log(bird.eat()); //eat
  console.log(bird.fly()); //fly
  ```

- super
  -super를 호출하면 수퍼클래스의 constructor를 호출한다.

  - 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
  - super는 반드시 서브클래스의 constructor에서만 호출한다.
  - super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

<br>

# MVC(Model View Control)

유지보수가 편해지는 코드 구성

- Controller -> Model(데이터) -> Controller -> view(사용자)
  - 사용자는 애플리케이션과 상호작용한다.
  - 컨트롤러의 이벤트 핸들러가 작동된다.
  - 컨트롤러는 모델로부터 데이터를 요구하고, 그 결과를 뷰로 전달한다.
  - 뷰는 데이터를 사용자에게 보여준다.  
    <br>

1. Model은 Controller와 View에 의존하지 않아야 한다.

2. View는 Model에만 의존해야 하고, Controller에는 의존하면 안된다.

3. View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받아야 한다.

4. Controller는 Model과 View에 의존해도 된다.

5. Vew가 Model로부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.
   <br>
   <br>
   <br>

![MVC](https://www.bottlehs.com/assets/javaScript-mvc-architecture.png)

<br>
🌟 MVC로 세개의 클래스를 나누어 구현하다가 서로 다른 클래스를 참조하는 부분에서 방황했는데 인스턴스를 다른 클래스의 인자와 매개변수로 받아주면 된다 :)

```js
//this.model.적절한 메소드
//this.view.적절한 속성
```

<br>

# 이벤트 버블링(Bubbling)

하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링이라고 한다. 이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며 발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문에 버블링이라 한다.

- 버블링 중단하기

  ```js
  event.stopPropagation();
  ```

  핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수 있다.

  <br>
  ⚠️ 버블링은 유용하므로 아키텍처를 잘 고려하여 중단하여야 한다.

  <br>

# 이벤트 캡처링(Capturing)

이벤트 버블링과 반대 방향으로 최상위에서 아래로 진행되는 이벤트 전파 방식이다.

<br>

# 이벤트 위임(Delegation)

하위 요소에 각각 이벤트를 붙이지 않고 공통 상위 요소에서 단 하나의 이벤트 핸들러만 할 당해도 여러 요소를 한꺼번에 다룰 수 있다.

1. 컨테이너에 하나의 핸들러를 할당한다.
2. 핸들러의 event.target을 사용해 이벤트가 발생한 요소가 어디인지 알아낸다.
3. 원하는 요소에서 이벤트가 발생했다고 확인되면 이벤트를 핸들링한다.

<br> 
⚠️ 이벤트 위임을 사용하려면 이벤트가 반드시 버블링 되어야 한다.

<br> 
🌟 todolist를 구현하면서 task의 완료를 확인하는 체크 아이콘과 task의 삭제를 할 수 있는 쓰레기통 아이콘에 클릭 이벤트를 만들었다. 하지만 이벤트 버블링 현상으로 같은 list의 텍스트를 클릭하면 콘솔로그창에 value를 찾을 수 없다는 오류가 발생했다. 이를 해결하기 위해 상위요소인 ul에 클릭 이벤트를 걸었다. 다음으로 event.target의 Nodename이 I(<i></i>)가 아니면 return으로 함수를 종료하고 I라면 해당 메서드를 실행할 수 있도록 문제를 해결하였다.

<br>

# 구조분해할당 (Destructuring)

객체나 배열을 변수로 '분해'할 수 있게 해준다.

```js
//*배열 디스트럭처링 할당*
const [x,...y] = [1,2,3];
console.log(x,y) // 1 [2,3]

const [ one, two, three ] = arr;
console.log(one,two,three) //1 2 3

//*객체 디스트럭처링 할당*
let {var1, var2} = {var1:…, var2:…}

const { name, id, done, trash } = toDo;
//위와 아래는 동치다.
const {name:name, id:id, done:done, trash:trash} = toDO;

//String 객체로부터 length 프로퍼티만 추출한다.
const str = "Hello";

const { length } = str;
console.log(length); //5

//toDo 객체로부터 id 프로퍼티만 추출한다.
const toDo = [
  {id:1,content:'HTML',completed:true},
  {id:2,content:'CSS',completed:false}
];
const [,{id}] = toDo;
console.log(id); // 2
```

🌟 view에서 model의 값을 직접 참조하는 것이 아니라 controller 에서 this.model.toDo의 값을 구조분해 할당하여 view에 인자로 넣어주었다. 이는 model과 view의 의존도를 낮출 수 있다.
