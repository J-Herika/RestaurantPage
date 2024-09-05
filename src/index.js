import "./reset.css";
import "./style.css";
import getNavBar from "./navbar.js";
import renderMain from "./main.js";

getNavBar().homeBtn.addEventListener("click", (e) => getToPage(e));
getNavBar().menuBtn.addEventListener("click", (e) => getToPage(e));
getNavBar().aboutBtn.addEventListener("click", (e) => getToPage(e));

function getToPage(e) {
  switch (e.target.textContent) {
    case "Home":
      console.log("home");
      renderMain();
      break;
    case "Menu":
      console.log("Menu");
      break;
    case "About":
      console.log("about");
      break;
  }
}
