// form 태그! // input 태그! = 2개 <1,2 input text타입의 value가 동일한지> //
javascript 유효성을 검증

# DOM

# Event

# HTML

 <title>탭의 제목</title>
 <p>문단1</p>

- rem: html을 기준으로 하는 절대적인 비율
- em: 폰트가 갖는 상대적인 비율

# npm

# CSS

# querySelector vs getElementById

getElementById는 id 속성만 선택자로 사용할 수 있다.
querySelector는 id(#), class(.), name 속성 등을 사용할 수 있다.
querySelector의 속도가 getElementById보다 느리다고 하나 생산성과 편의성 등 여러가지 측면을 생각한다면 querySelector를 사용해도 괜찮다.

# insertAdjacentHTML vs innerHTML

innerHTML을 사용하면 기존에 있던 것은 덮어쓰기가 되어 기존의 값은 보이지 않는다.

하지만 insertAdjacentHTML은 기존의 값은 건드리지 않고, 새롭게 내가 입력하고 싶은 값을 어떤 위치에 놓을지 까지 설정할 수 있다. 시작 태그의 앞(beforebegin - 형제 레벨), 시작 태그의 뒤(afterbegin - 자식요소), 종료 태그 앞(beforeend - 자식요소), 종료 태그 뒤(afterend - 형제레벨)에 노드를 삽입할 수 있다.

```js
element.insertAdjacentHTML(position, text);
element.innerHTML(text);
```

![insertAdjacentHTML](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDxTiI%2Fbtqu7oDWmtS%2FlkjM0PPvogOPhG4mzyW88k%2Fimg.png)

# onclick vd addEventListener

덮어쓰기 vs 누적
