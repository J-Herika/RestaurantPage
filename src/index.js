import animeGirl from "./assets/Dual.jpg";
import "./style.css";

const img = document.createElement("img");
img.src = animeGirl;
img.setAttribute("style", "width: 40%");
document.body.append(img);
