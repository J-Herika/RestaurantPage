const contentEL = document.querySelector("#content");

function createHeader() {
  const headerDiv = document.createElement("div");
  const header = document.createElement("h1");

  header.textContent = "Menu";

  header.classList.toggle("menu-heading");
  headerDiv.classList.add("menu-header");

  headerDiv.append(header);

  return headerDiv;
}

function createBody() {
  const itemsDivEl = document.createElement("div");
  const item01 = document.createElement("p");
  const item01Price = document.createElement("p");

  itemsDivEl.classList.add("menu-items-container");
  item01.classList.toggle("menu-items");
  item01Price.classList.toggle("menu-prices");

  item01.textContent = "Udon";
  item01Price.textContent = "400 ¥";

  itemsDivEl.append(item01, item01Price);

  return itemsDivEl;
}

export default function renderMenu() {
  contentEL.textContent = "";

  contentEL.append(createHeader(), createBody());
}
