/*1. 런타임 이전에 선언문 - 소스코드를 평가 
  2. 런타임이 실행되면 한 줄씩 코드를 실행, 변수에 값을 할당
  3. 실행컨텍스트 스택(콜스택)에 전역컨텍스트가 쌓인다.
  4. 마우스엔터 이벤트핸들러가 콜스택에 쌓인다.
  5. 브라우저는 타이머 1초를 설정하고 만료되면 콜백함수를 콜백큐에 푸시하여 콜백함수는 대기한다.   
  []6. 마우스가 1초간 머물러 있으면 마우스엔터 이벤트 핸들러가 팝되어 콜스택에서 빠진다.
  전역컨텍스트가 팝되어 콜스택이 빈다.
  7. 이벤트 루프에 의해 콜백큐(이벤트큐)에 대기하던 콜백함수가 실행컨텍스트로 푸시된다.
  8. 콜백함수 실행 후 팝된다.
  9.   

  콜 스택이 비면(전역 실행 컨텍스트까지 팝되면) 
  태스크 큐(콜백 큐)에 대기 중인 비동기 함수(브라우저가 타이머 설정, 만료 후 타이머 콜백 함수를 태스크 큐에 푸시함)가 
  이벤트 루프에 의해 콜스택으로 푸시된다.
*/

const throttle = (callback, delay) => {
  let timerId;
  //클로저
  return (event) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(event);
        timerId = null;
      },
      delay,
      event
    );
  };
};

list.addEventListener(
  "mousemove",
  throttle(() => {
    const printCount = `<li>${event.target.innerText} : ${movingCount++}</li>`;
    const position = "beforeend";
    count.insertAdjacentHTML(position, printCount);
  }, 500)
);
