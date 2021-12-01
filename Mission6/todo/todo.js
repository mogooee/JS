//선택기를 이용하여 검색 #은 id, .은 class
const clear = document.querySelector(".clear");

//id속성을 일치시켜서 dom의 노드를 찾음
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//class
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id = 0;

//로컬스토리지부터 얻는다
let data = localStorage.getItem("TODO");

//데이터가 비어있지는 않은지 확인
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

//유저 인터페이스에 목록 로드
function loadList(array) {
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

//clear
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

//날짜
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//할일 추가
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  //변수

  const item = `   <li class="item"> <span>
  <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fa fa-trash-o delete" job="delete" id="${id}"></i> </span>
  </li> 
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

//엔터를 누르면 목록을 추가
document.addEventListener("keyup", function (even) {
  if (event.keyCode === 13) {
    const toDo = input.value;

    if (toDo) {
      addToDo(toDo);

      LIST.push({ name: toDo, id: id, done: false, trash: false });

      //로컬스토리에 저장한다.
      localStorage.setItem("TODO", JSON.stringify(LIST));
      id++;
    }
    input.value = "";
  }
});

//완료
function completeToDo(element) {
  //클래스 제어 0,1 로 toggle
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

//제거
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

//클릭 이벤트

list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeToDo(element);
  } else if (elementJob === "delete") {
    removeToDo(element);
  }
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
