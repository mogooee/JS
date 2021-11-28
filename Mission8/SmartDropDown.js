const container = document.querySelector(".container");
const list = container.querySelector(".list");
const count = document.querySelector(".count");

let movingCount = {};

function showFruitList() {
  list.classList.remove("hidden");
  list.classList.add("show");
}

container.addEventListener("mouseenter", () => {
  const Timer = setTimeout(() => {
    showFruitList();
  }, 1000);

  container.addEventListener("mouseleave", () => {
    clearTimeout(Timer);
  });
});

const debounce = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

list.addEventListener(
  "mousemove",
  debounce((event) => {
    let eventTarget = event.target;

    if (eventTarget.nodeName !== "LI") {
      return;
    }

    printSelectedNum(eventTarget);
  }, 500)
);

function printSelectedNum(selectedFruit) {
  if (!movingCount[selectedFruit.innerText]) {
    movingCount[selectedFruit.innerText] = 1;
  } else {
    movingCount[selectedFruit.innerText]++;
  }
  count.innerHTML = JSON.stringify(movingCount, null, 2);
}
