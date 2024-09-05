const homeBtnEl = document.createElement("button");
const menuBtnEl = document.createElement("button");
const aboutBtnEl = document.createElement("button");
const buttonList = [];

function designButtons(button, content, className) {
  button.textContent = content;
  button.classList.toggle(className);
  buttonList.push(button);
}

designButtons(homeBtnEl, "Home", "btn");
designButtons(menuBtnEl, "Menu", "btn");
designButtons(aboutBtnEl, "About", "btn");

export default function getNavBar() {
  const navbarEl = document.querySelector("#navbar");
  navbarEl.append(menuBtnEl, homeBtnEl, aboutBtnEl);
}
