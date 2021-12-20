const selectors = {
  toDoForm: document.querySelector(".js-toDoForm"),
  toDoInput: toDoForm.querySelector("input"),
  todoList: document.querySelector(".js-toDoList"),
  TODOS_LS: "toDos",
};

console.log(selectors);

/*
1. 로컬스토리지에 있는 todo값 가져오기 -> m
2. 제출하면 input값을 paint 함수로 넣어준다.-> 제출 c
3-1. paint todo에서 객체 값을 html에 넣어준다. -> v
3-2. 객체값을 todo배열에 push ->m
4. 로컬스토리지에 저장한다. ->m
5. 삭제버튼을 누르면 cleantodo와 todo의 id가 다른 것만 반환(삭제되지 않은 값만 반환) ->v / 삭제->c
*/
class Model {
  constructor(selectors) {
    this.selectors = selectors;
    this.toDos = [];
  }
}

class View {
  constructor(model) {
    this.model = model;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    //이벤트
    console.log(this.model);
  }
}

const model = new Model(selectors);
const view = new View(model);
const controller = new Controller(model, view);

controller.init();
