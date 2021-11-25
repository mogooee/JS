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
  AddLIST() {
    const toDo = this.selectors.input.value;

    if (toDo) {
      this.LIST.push({ name: toDo, id: this.id, done: false, trash: false });
      this.id++;
      this.selectors.input.value = "";
    }
  }
  EditToDo(element) {}
}

class View {
  constructor(model) {
    this.model = model;

    this.CHECK = "fa-check-circle";
    this.UNCHECK = "fa-circle-thin";
    this.LINE_THROUGH = "lineThrough";
  }

  ShowLIST({ name, id, done, trash }) {
    //const { name, id, done, trash } = toDo;

    if (trash) {
      return;
    }
    const DONE = done ? this.CHECK : this.UNCHECK;
    const LINE = done ? this.LINE_THROUGH : "";
    const item = `   <li class="item"> 
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${name}</p> 
    <i class="fa fa-pencil pen" job="edit"></i>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
    </li> 
    `;
    const position = "beforeend";

    if (name) {
      list.insertAdjacentHTML(position, item);
    }
  }

  CompleteToDo(element) {
    element.classList.toggle(this.CHECK);
    element.classList.toggle(this.UNCHECK);
    element.parentNode
      .querySelector(".text")
      .classList.toggle(this.LINE_THROUGH);

    this.model.LIST[element.id].done = this.model.LIST[element.id].done
      ? false
      : true;
  }

  RemoveToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    this.model.LIST[element.id].trash = true;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.EnterAddToDo();
    this.ClickAddToDo();
    this.ClickDoneOrTrash();
  }

  EnterAddToDo() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.model.AddLIST();
        this.view.ShowLIST(this.model.LIST[this.model.id - 1]);
      }
    });
  }

  ClickAddToDo() {
    const add_item = document.querySelector(".add_item");

    add_item.addEventListener("click", (event) => {
      const element = event.target;
      if (element.nodeName !== "I") {
        return;
      }
      this.model.AddLIST();
      this.view.ShowLIST(this.model.LIST[this.model.id - 1]);
    });
  }

  ClickDoneOrTrash() {
    document.getElementById("list").addEventListener("click", (event) => {
      event.preventDefault();
      const element = event.target;
      if (element.nodeName !== "I") {
        return;
      }

      const elementJob = element.attributes.job.value;

      if (elementJob === "complete") {
        this.view.CompleteToDo(element);
      } else if (elementJob === "delete") {
        this.view.RemoveToDo(element);
      } else if (elementJob === "edit") {
        this.model.EditToDo(element);
      }
    });
  }
}

const model = new Model(selectors);
const view = new View(model);
const controller = new Controller(model, view);

controller.init();
