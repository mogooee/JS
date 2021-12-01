const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    //저장된 todo배열의 id와 선택한 li의 id가 같지 않은 것만 반환
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //로컬스토리지는 모든 데이터를 스트링으로 저장한다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newID;
  todoList.appendChild(li);
  //   const item = `   <li class="item" id="newID">
  // <i class="fa fa-circle-thin co" ></i>
  // <span class="text">${toDo}</span>
  // <i class="fa fa-trash-o de" ></i>
  // </li>
  // `;
  //   todoList.addEventListener("click", (event) => {
  //     const element = event.target;
  //     //const li = element.parentNode;
  //     //todoList.removeChild(li);

  //   });

  //const position = "beforeend";
  //li와 toDos배열에 id를 생성하여 각 목록에 고유한 값을 준다.

  //html에 추가
  //   todoList.insertAdjacentHTML(position, item);
  //데이터 담기
  const toDoObj = {
    text: text,
    id: newID,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadToDos = localStorage.getItem(TODOS_LS);
  if (loadToDos) {
    //로컬스토리지에 담긴 스트링을 다시 배열로 변환
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
