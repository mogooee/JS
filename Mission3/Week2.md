# 해시(Hash)/해시 함수(Hash Function)/해싱(Hashing)?

**해시(Hash)** 란 데이터를 다루는 기법 중 하나이며,**해시 함수(Hash Function)** 는 데이터를 효율적으로 관리하기 위해서 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
매핑전 원래 데이터의 값을 **키(key)**, 매핑 후 데이터의 값을 **해시값(Hash Value) 또는 해시코드** 라고 하며, 키(key)와 값(value)으로 매핑되는 과정 자체를 **해싱(Hashing)** 이라고 한다

# 해시 테이블(Hash Table)?

**해시 테이블(Hash Table)** 은 키(key)와 값(value)이 하나의 쌍을 이루는 데이터 구조이다. 즉, 키(key)와 배열의 인덱스(index)를 이용하여 키를 저장하는 자료구조이다. 해시 테이블은 해시 맵, 맵, 딕셔너리, 연관 배열 이라는 이름으로 알려져있다.

[Hash map] ![Image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fojpfo%2FbtqAXP9PLGI%2FkXwsIKhwS9ykPC1WG8Qne0%2Fimg.png)

**원래 데이터의 값(Key) -> Hash Function -> Hash Function의 결과 = Hash Code
-> Hash Code를 배열의 Index 로 사용 -> 해당하는 Index에 data 넣기**

또한 Hash Function은 내부적으로 index의 값이 배열의 길이를 넘어가지 않도록 되어 있다.

때문에 다른 key를 Hash Function에 넣었음에도 같은 index가 나오는 경우가 있는데 (Collision)이런 경우 링크드 리스트를 이용한 Chaining 방식이나 데이터의 빈 곳을 찾아 저장하는 Open Addressing이란 방식 등으로 중복 문제를 해결한다.

_해시 테이블은 어떤 특정 값을 받으면 그 값을 해시 함수에 통과시켜 나온 인덱스(index)에 저장하는 자료구조이다._

[Open Hashing - 해시맵과 Chaining을 이해할 수 있는 사이트](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)

# Prototype?

![Image](https://media.vlpt.us/post-images/adam2/12a5e250-fd90-11e9-959f-1f9679bea880/1nDBFaMpflmSsIKfMLxWIvQ.jpeg)

JavaScript는 기존의 객체를 복사하여 새로운 객체를 생성하는 프로토타입 기반 언어(prototype-based language)라 불린다. 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체(prototype object)를 가진다.

**프로토타입객체**란? 함수를 정의하면 다른 곳에 프로토타입 객체가 생성되고 프로토타입 객체 자신은 다른 객체의 원형이 된다. 원형인 프로토타입 객체를 이용하여 객체를 만들고 이때 만들어진 객체 안에 **proto**(비표준) 속성이 자신을 만들어낸 원형을 의미하는 프로토타입 객체를 참조하는 숨겨진 링크가 있다. 이 숨겨진 링크를 **프로토타입**이라고 정의한다. 모든 객체는 프로토타입 객체에 접근할 수 있다.

![Image](https://www.nextree.co.kr/content/images/2021/01/hjkwon-140324-prototype-02.png)

리터럴 또는 Object.create()를 이용하여 객체를 생성하고 확장해 가는 방식이다.

- constructor는 내가 선언한 생성자 함수(Foo)를 가리킨다. new 키워드와 함께 함수를 호출할 경우 constructor함수를 실행하고 부수효과로 객체가 생성된다.
  생성자 함수가 아니라 함수를 생성하는 호출이라고 생각하는것이 맞다
- prototype은 생성자 함수에 정의한 모든 객체가 공유할 원형이다.
- proto는 [[Prototype]]링크이다. 생성자 함수에 정의해두었던 prototype을 참조한다.

- [생활코딩 - JavaScript 객체 지향 프로그래밍 - 15. prototype vs proto](https://youtu.be/wT1Bl5uV27Y)

# Class

new 연산자를 통해 생성한 객체를 사용하여 코드를 재사용하는 방법이다.

# new

생성자 함수는 객체 상수에 비해서 객체 생성시 작성 코드 길이를 줄여준다. 예를 들어 name, type을 객체 상수로 작서할 경우 반복되는 명령어를 개체마다 같이 작성해주어야 한다.

```js
<script>
	//삼성전자 객체 생성
	var stock1 =
	{
		name : "samsung",
		price : 43750,
	}

	//애플 객체 생성
	var stock2 =
	{
		name : "apple",
		price : 213402,
	}

	//마이크로소프트 객체 생성
	var stock3 =
	{
		name : "microsoft",
		price : 49974,
	}
</script>
```

하지만, 생성자 함수를 사용해서 반복되는 속성이나 메서드를 미리 틀을 만들어놓을 수 있다. 이러면 나중에 객체를 생성할 대 속성명이나 메서드명을 반복적으로 작성할 필요가 없다.

```js
<script>
	//생성자 함수 생성
	function Stock(name, price)
	{
		this.company = name;
		this.cost = price;
	}

	//객체 생성
	var samsung = new Stock("삼성전자", 43750);
	var apple = new Stock("애플", 213402);
	var microsoft = new Stock("마이크로소프트", 49974);
</script>
```

생성자 함수 내부의 변수(속성 및 메서드)는 this 키워드를 붙여서 지역변수로 한정시킨다. new 연산자를 사용해야만 함수 내부의 내용을 변수에 대입 할 수 있다.

js에서 new연산자는 결국 새 객체를 다른 객체와 연결하기 위한 간접적인 우회 방법이고, Object.create()를 이용해 직접적으로 객체를 연결해주는 방법도 있다.

함수는 결코 생성자가 아니지만 new를 붙여 호출하는 순간 이 함수는 생성자 호출을 한다. new키워드는 일반 함수 호출 도중에 원래 수행할 작업 외에 객체 생성이라는 잔업을 더 부과하는 지시자인 것이다.

```js
function nothing() {
  console.log(`그저 함수입니다`);
}

const a = new nothing();
// "그저 함수입니다"
a; // {}
```

# 스택(Stack)

스택은 가장 윗부분에서만 자료의 추가와 삭제가 일어나므로 실행속도가 빠르고 구현이 쉬운 효율적인 **후입선출(LIFO; Last-in, First-out)** 자료구조다.

스택은 수식 평가에서부터 함수 호출까지 프로그래밍 언어 구현의 다양한 영역에 사용되고있다.

스택에 요소를 추가하는 동작을 **PUSH**라고하고 제거하는 동작을 **POP**이라고한다. 또 스택의 TOP에 있는 요소를 확인할수있는 동작은 **PEEK** 라고 한다
