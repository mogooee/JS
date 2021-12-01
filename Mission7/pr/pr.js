//선택기를 이용하여 검색 #은 id, .은 class
const clear = document.querySelector(".clear");
const add_item = document.querySelector(".add_item");

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

  const item = `   <li class="item"> 
  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
  </li> 
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

//엔터를 누르면 목록을 추가
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addLIST();
  }
});

//+아이콘을 누르면 목록을 추가
add_item.addEventListener("click", (event) => {
  addLIST();
});

//목록을 lIST 변수에 담기
function addLIST() {
  const toDo = input.value;

  if (toDo) {
    addToDo(toDo, id, false, false);

    LIST.push({ name: toDo, id: id, done: false, trash: false });
    id++;
  }
  input.value = "";
}

//complete to do ( Click check)
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

//target the items created dynamically

list.addEventListener("click", (event) => {
  element = event.target;
  elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeToDo(element);
  } else if (elementJob === "delete") {
    removeToDo(element);
  }
});
