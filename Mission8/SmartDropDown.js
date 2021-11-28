const header = document.querySelector(".header");
const container = document.querySelector(".container");
const list = container.querySelector(".list");
const count = document.querySelector(".count");

function showFruitList() {
  list.classList.remove("hidden");
  list.classList.add("show");
}

header.addEventListener("mouseenter", () => {
  const Timer = setTimeout(() => {
    showFruitList();
  }, 1000);

  header.addEventListener("mouseleave", () => {
    clearTimeout(Timer);
  });
});

let movingCount = {};
let timer;

list.addEventListener("mousemove", (event) => {
  if (timer || event.target.nodeName !== "LI") {
    return;
  }
  //time=undefined (바로 출력)
  //timer=1 (setTimeout의 반환값)
  timer = setTimeout(() => {
    //500ms 후 콜백함수 실행, timer=null
    timer = null;
    //처음 들어온 event를 기억
    printSelectedNum(event.target.innerText);
  }, 500);
});

function printSelectedNum(selectedFruit) {
  const countFruit = count.querySelector(`.${selectedFruit}`);

  if (!movingCount[selectedFruit]) {
    movingCount[selectedFruit] = 1;
    createNewCount(selectedFruit);
  } else {
    movingCount[selectedFruit]++;

    countFruit.innerHTML = `${selectedFruit} : ${movingCount[selectedFruit]}`;
  }
}

function createNewCount(selectedFruit) {
  const countLi = document.createElement("li");
  count.appendChild(countLi);
  countLi.classList.add(selectedFruit);
  countLi.innerHTML = `${selectedFruit} : ${movingCount[selectedFruit]}`;
}
