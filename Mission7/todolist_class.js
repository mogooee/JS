const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

class MODEL {
  constructor(dateElement, list, input) {
    this.dateElement = dateElement;
    this.list = list;
    this.input = input;

    this.LIST = [];
    this.id = 0;
  }

  date() {
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();

    this.dateElement.innerHTML = today.toLocaleDateString("en-US", options);
  }

  addToDo(toDo, id, done, trash) {
    if (trash) {
      return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `   <li class="item"> 
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p> 
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
    </li> 
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
  }

  addLIST() {
    const toDo = input.value;

    if (toDo) {
      this.addToDo(toDo, this.id, false, false);
      this.LIST.push({ name: toDo, id: this.id, done: false, trash: false });
      this.id++;
    }
    input.value = "";
  }

  completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    this.LIST[element.id].done = this.LIST[element.id].done ? false : true;
  }

  removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    this.LIST[element.id].trash = true;
  }
}

const model = new MODEL(
  document.getElementById("date"),
  document.getElementById("list"),
  document.getElementById("input")
);
model.date();

//이벤트 위임 , 이벤트 버블링-캡처링
//엔터를 누르면 목록을 추가
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    model.addLIST();
  }
});

//+아이콘을 누르면 목록을 추가
const add_item = document.querySelector(".add_item");

add_item.addEventListener("click", (event) => {
  element = event.target;
  if (element.nodeName === "I") model.addLIST();
});

//체크버튼, 쓰레기통 버튼
document.getElementById("list").addEventListener("click", (event) => {
  element = event.target;
  elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    model.completeToDo(element);
  } else if (elementJob === "delete") {
    model.removeToDo(element);
  }
});
