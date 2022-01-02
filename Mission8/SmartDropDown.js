const list = document.querySelector(".menu__list");
const menuCount = document.querySelector(".menu__count");
const menuHeader = document.querySelector(".menu__header");

class SmartDropDownMenu {
  constructor() {
    this.count = {};
    this.init();
  }

  init() {
    this.InitEventListener();
  }

  ShowList() {
    list.classList.toggle("menu__hide");
    menuCount.classList.toggle("menu__hide");
  }

  CountMenu(fruit) {
    this.count[fruit] ? this.count[fruit]++ : (this.count[fruit] = 1);
  }

  Rendering(fruit) {
    if (!fruit) return;

    if (this.count[fruit] === 1) {
      const template = `<li id="${fruit}">${fruit}: ${this.count[fruit]}</li>`;
      const position = "beforeend";
      document
        .querySelector(".menu__count")
        .insertAdjacentHTML(position, template);
    } else if (this.count[fruit] > 1) {
      document.querySelector(
        `#${fruit}`
      ).innerText = `${fruit}: ${this.count[fruit]}`;
    }
  }

  InitEventListener() {
    let countTimer;
    let listShowTimer;
    list.addEventListener("mousemove", (e) => {
      if (countTimer || e.target.nodeName !== "LI") {
        return;
      }
      countTimer = setTimeout(() => {
        countTimer = null;
        this.CountMenu(e.target.innerText);
        this.Rendering(e.target.innerText);
      }, 500);
    });

    menuHeader.addEventListener("mouseenter", (e) => {
      listShowTimer = setTimeout(() => {
        this.ShowList();
      }, 1000);
    });

    menuHeader.addEventListener("mouseleave", (e) => {
      clearTimeout(listShowTimer);
    });
  }
}

const smartDropDownMenu = new SmartDropDownMenu();
