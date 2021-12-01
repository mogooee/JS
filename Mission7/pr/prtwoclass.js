const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id = 0;

class MODEL {
  constructor(dateElement, list, input) {
    this.dateElement = dateElement;
    this.list = list;
    this.input = input;
  }

  static date() {
    this.dateElement = document.getElementById("date");

    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();

    this.dateElement.innerHTML = today.toLocaleDateString("en-US", options);
  }

  static addToDo(toDo, id, done, trash) {
    this.list = document.getElementById("list");
    this.input = document.getElementById("input");

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

  //목록을 lIST 변수에 담기
  static addLIST() {
    const toDo = input.value;

    if (toDo) {
      this.addToDo(toDo, this.id, false, false);

      LIST.push({ name: toDo, id: id, done: false, trash: false });
      id++;
    }
    input.value = "";
  }

  static completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
  }

  //remove to do
  static removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
  }
}

MODEL.date();

class view extends MODEL {
  constructor() {}
}

//엔터를 누르면 목록을 추가
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    MODEL.addLIST();
  }
});

//+아이콘을 누르면 목록을 추가
const add_item = document.querySelector(".add_item");

add_item.addEventListener("click", (event) => {
  MODEL.addLIST();
});

//체크버튼, 쓰레기통 버튼
list.addEventListener("click", (event) => {
  element = event.target;
  elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    MODEL.completeToDo(element);
  } else if (elementJob === "delete") {
    MODEL.removeToDo(element);
  }
});

// //컨트롤러
// class Controller {
//     constructor(model, view, selector) {
//         this.model = model;
//         this.view= view;
//         this.selector = selector;
//         this.init();
//     }

//     init() {
//         this.addEvent();
//      }

//      addEvent() {
//          this.selector.아무DOM.addEventListener('click', this.model.뭐시기이벤트.bind(this.model))
//          this.selector.아무DOM.addEventListener('change', this.model.아무이벤트.bind(this.model)) }
// }
