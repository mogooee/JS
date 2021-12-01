const taskList = [];

function addNewTask() {
  let task = document.querySelector("#newTask").value;
  if (task) {
    taskList.push(task);
  }
  showList();
}

function showList() {
  //<ul> <li> taskList[i]  </li> </ul>
  let list = "<ul>";
  for (let i = 0; i < taskList.length; i++) {
    list +=
      "<li>" +
      taskList[i] +
      // "<span class='close' id=" +
      // i +
      // ">" +
      "❎" +
      "</span></li>";
  }

  list += "</ul>";

  document.querySelector("#taskList").innerHTML = list;
}

ul.onclick = function (event) {
  console.log(event.target);
};
