import "./reset.css";
import "./style.css";
import getNavBar from "./navbar.js";
import renderMain from "./home-page.js";
import renderMenu from "./menu-page.js";
import renderAbout from "./about.js";

getNavBar().homeBtn.addEventListener("click", (e) => getToPage(e));
getNavBar().menuBtn.addEventListener("click", (e) => getToPage(e));
getNavBar().aboutBtn.addEventListener("click", (e) => getToPage(e));
// for pusblishing it ..
function getToPage(e) {
  switch (e.target.textContent) {
    case "Home":
      console.log("home");
      renderMain();
      break;
    case "Menu":
      console.log("Menu");
      renderMenu();
      break;
    case "About":
      console.log("about");
      renderAbout();
      break;
  }
}
