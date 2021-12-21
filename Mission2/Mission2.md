# Iteration : 반복

ES6에서 Iteration 프로토콜은 Iterable 프로토콜과 Iterator 프로토콜로 구성된다.

Iterable (순회 가능한 자료 구조) 프로토콜은 반복 가능한 오브젝트를 나타내는 프로토콜이며, Iterator 프로토콜은 이터러블 오브젝트(Iterable 프로토콜을 따르는 오브젝트)의 값을 작성한 순서대로 처리하는 프로토콜이다.

# replace()

문자열의 일부를 다른 문자열로 바꿀 때 사용한다.

# test()

찾는 문자열이, 들어있는지 아닌지를 알려준다.

# .jsonStringfy()

배열값을 문자열로 바꿔 한번에 비교해준다.

# 객체(object)

JS로 데이터를 표현하기 위해서는 Array, Object를 사용해야 한다. object는 {} 로 자료를 표현하며, 서버와 클라이언트 간에 데이터를 교환할때 Object형태와 비슷한 방법으로 JSON이라는 데이터 포맷으로 데이터를 교환한다

```js
const obj = { name: "crong", age: 20 }; // {key,value}

const myFriend = { key: "value" };

//value 출력
console.log(myFriend["key"]);
console.log(myFriend.key);

//추가
myFriend.age = 34;

//추가한 정보 출력
console.log(myFriend.age);
```

# 객체 탐색

- for - in 을 사용한 방법,

- Object.keys(), Object.values(), entries() 와 같은 메서드

- Object.keys()와 배열메서드(forEach)로 순회 하는 방법 등

# 배열의 탐색

- forEach, map, filter, reduce

  이 메서드들을 사용하면 번잡한 반복문을 쓰지 않고도 배열을 순회하면서 어떤 목적을 달성할 수 있다. 다른 함수를 받아서 처리하는 higher order function이다.

# 재귀함수(Recursion)

재귀함수는 종료조건이 있어야 하고 설정해주지 않으면 무한 반복을 하게된다.
