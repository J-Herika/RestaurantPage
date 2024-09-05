const contentEL = document.querySelector("#content");

function createHeader() {
  const titleH1 = document.createElement("h1");
  const titleH3 = document.createElement("h3");
  const headingDiv = document.createElement("div");

  titleH1.textContent = "Saikō no resutoran e yōkoso";
  titleH3.textContent = "(Welcome to the Best Resturant)";
  titleH1.classList.toggle("heading-h1");
  titleH3.classList.toggle("heading-h3");
  headingDiv.classList.add("header-div");

  headingDiv.append(titleH1, titleH3);

  return headingDiv;
}

function createBody() {
  const paragraphEl = document.createElement("p");
  const mainEl = document.createElement("div");

  paragraphEl.textContent =
    "Welcome to our Japanese restaurant, where the rich flavors of traditional cuisine meet a modern dining experience. From freshly prepared sushi and sashimi to sizzling teppanyaki, we offer a variety of dishes crafted with the finest ingredients. Whether you're here for a quick lunch or a relaxing dinner, our warm ambiance and authentic flavors will transport you to the heart of Japan.";
  paragraphEl.classList.toggle("main-p");
  mainEl.classList.add("home-main-section");

  mainEl.append(paragraphEl);
  return mainEl;
}

export default function renderMain() {
  contentEL.textContent = "";

  contentEL.append(createHeader(), createBody());
}
