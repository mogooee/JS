# Class

- 데이터가 들어있지 않고 틀만 정의 한 것이다.
- 클래스로 새로운 인스턴스를 만들면 Object가 된다.
- new 연산자 없이 호출할 수 없다.
- 암묵적으로 모든 코드에 strict mode가 지정되어 실행되며 해제할 수 없다.
- constructor(생성자), 프로토타입 메서드, 정적 메서드 세가지를 정의할 수 있다.
- static 메서드는 프로토타입 메서드와 달리 인스턴스 없이 클래스로 호출한다. 인스턴스 프로퍼티를 참조할 수 없다.
- get, set

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

  - 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다. - super는 반드시 서브클래스의 constructor에서만 호출한다.

  -super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

# MVC(Model View Control)

유지보수가 편해지는 코드 구성

- Controller -> Model(데이터) -> Controller -> view(사용자)
  - 사용자는 애플리케이션과 상호작용한다.
  - 컨트롤러의 이벤트 핸들러가 작동된다.
  - 컨트롤러는 모델로부터 데이터를 요구하고, 그 결과를 뷰로 전달한다.
  - 뷰는 데이터를 사용자에게 보여준다.

1. Model은 Controller와 View에 의존하지 않아야 한다.

2. View는 Model에만 의존해야 하고, Controller에는 의존하면 안된다.

3. View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받아야 한다.

4. Controller는 Model과 View에 의존해도 된다.

5. vVew가 Model로부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.

![MVC](https://www.bottlehs.com/assets/javaScript-mvc-architecture.png)

🌟 서로 다른 클래스를 참조하는 부분에서 방황했는데 인스턴스를 다른 클래스의 인자와 매개변수로 받아주면 된다 :)

```js
//this.model.적절한 메소드
//this.view.적절한 속성
```

# 이벤트 버블링(Bubbling)

하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링이라고 한다. 이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며 발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문에 버블링이라 한다.

- 버블링 중단하기

  ```js
  event.stopPropagation();
  ```

  핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수 있다.

  ⚠️ 버블링은 유용하므로 아키텍처를 잘 고려하여 중단하여야 한다.

# 이벤트 캡처링(Capturing)

이벤트 버블링과 반대 방향으로 최상위에서 아래로 진행되는 이벤트 전파 방식이다.

# 이벤트 위임(Delegation)

하위 요소에 각각 이벤트를 붙이지 않고 공통 상위 요소에서 단 하나의 이벤트 핸들러만 할 당해도 여러 요소를 한꺼번에 다룰 수 있다.

1. 컨테이너에 하나의 핸들러를 할당한다.
2. 핸들러의 event.target을 사용해 이벤트가 발생한 요소가 어디인지 알아낸다.
3. 원하는 요소에서 이벤트가 발생했다고 확인되면 이벤트를 핸들링한다.

⚠️ 이벤트 위임을 사용하려면 이벤트가 반드시 버블링 되어야 한다.

🌟 todolist를 구현하면서 task의 완료를 확인하는 체크 아이콘과 task의 삭제를 할 수 있는 쓰레기통 아이콘에 클릭 이벤트를 만들었다. 하지만 이벤트 버블링 현상으로 같은 list의 텍스트를 클릭하면 콘솔로그창에 value를 찾을 수 없다는 오류가 발생했다. 이를 해결하기 위해 상위요소인 ul에 클릭 이벤트를 걸었다. 다음으로 event.target의 Nodename이 I(<i></i>)가 아니면 return으로 함수를 종료하고 I라면 해당 메서드를 실행할 수 있도록 문제를 해결하였다.
