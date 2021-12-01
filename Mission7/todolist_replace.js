const selectors = {
  dateElement: document.getElementById("date"),
  list: document.getElementById("list"),
  input: document.getElementById("input"),
};

class Model {
  constructor(selectors) {
    this.selectors = selectors;
    this.LIST = [];
    this.id = 0;
  }
  addLIST() {
    const toDo = this.selectors.input.value;

    if (toDo) {
      this.LIST.push({ name: toDo, id: this.id, done: false, trash: false });
      this.id++;
    }
  }
}

class View {
  constructor(model) {
    this.model = model;

    this.CHECK = "fa-check-circle";
    this.UNCHECK = "fa-circle-thin";
    this.LINE_THROUGH = "lineThrough";
  }

  showLIST(toDo, id, done, trash) {
    if (trash) {
      return;
    }
    const DONE = done ? this.CHECK : this.UNCHECK;
    const LINE = done ? this.LINE_THROUGH : "";
    this.item = `   <li class="item"> 
      <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE} ">${toDo}</p> 
      <i class="fa fa-pencil pen" job="edit"></i>
      <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
      </li> 
      `;
    const position = "beforeend";
    //공백 입력시에는 보여주지 않는다.
    if (toDo) {
      list.insertAdjacentHTML(position, this.item);
    }

    //add가 끝나면 빈칸으로
    this.model.selectors.input.value = "";
  }

  CompleteToDo(element) {
    element.classList.toggle(this.CHECK);
    element.classList.toggle(this.UNCHECK);
    element.parentNode
      .querySelector(".text")
      .classList.toggle(this.LINE_THROUGH);

    //model = id, view=done,trash
    console.log(this.model.LIST[element.id]);

    this.model.LIST[element.id].done = this.model.LIST[element.id].done
      ? false
      : true;
  }

  RemoveToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    this.model.LIST[element.id].trash = true;
  }

  //   EditToDo(element) {

  //   }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    //이벤트
    this.pushEnter();
    this.clickAddToDo();
    this.clickDoneOrTrash();
  }

  pushEnter() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.model.addLIST();
        this.view.showLIST(
          this.model.selectors.input.value,
          this.model.id,
          false,
          false
        );
      }
    });
  }

  clickAddToDo() {
    const add_item = document.querySelector(".add_item");

    add_item.addEventListener("click", (event) => {
      const element = event.target;
      if (element.nodeName === "I") {
        this.model.addLIST();
        this.view.showLIST(
          this.model.selectors.input.value,
          this.model.id,
          false,
          false
        );
      }
    });
  }

  clickDoneOrTrash() {
    document.getElementById("list").addEventListener("click", (event) => {
      event.preventDefault();
      const element = event.target;
      //아이콘이 아니면 종료
      if (element.nodeName !== "I") {
        return;
      }

      const elementJob = element.attributes.job.value;

      if (elementJob === "complete") {
        this.view.CompleteToDo(element);
      } else if (elementJob === "delete") {
        this.view.RemoveToDo(element);
      } else if (elementJob === "edit") {
        this.view.EditToDo(element);
      }
    });
  }
}

const model = new Model(selectors);
const view = new View(model);
const controller = new Controller(model, view);

controller.init();
