const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const aboutBtn = document.createElement("button");

function designButtons(button, content, className) {
  button.textContent = content;
  button.classList.toggle(className);
}

designButtons(homeBtn, "Home", "btn");
designButtons(menuBtn, "Menu", "btn");
designButtons(aboutBtn, "About", "btn");

export default function getNavBar() {
  const navbarEl = document.querySelector("#navbar");
  navbarEl.append(menuBtn, homeBtn, aboutBtn);

  return { homeBtn, menuBtn, aboutBtn };
}
