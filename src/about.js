const contentEL = document.querySelector("#content");

function createHeader() {
  const headerDiv = document.createElement("div");
  const header = document.createElement("h1");

  header.textContent = "About";

  header.classList.toggle("heading");
  headerDiv.classList.add("about-header");

  headerDiv.append(header);

  return headerDiv;
}

function createBody() {
  const infoDiv = document.createElement("div");

  const monToFriday = new createTimes(
    "Monday To Friday",
    "11:30 AM – 10:00 PM"
  );
  const saturday = new createTimes("Saturday", "12:00 PM – 11:00 PM");
  const Sunday = new createTimes("Sunday", "12:00 PM – 9:00 PM");
  const specialMenu = new createTimes(
    "We also offer special lunch menus from",
    "11:30 AM – 2:30 PM on weekdays."
  );

  infoDiv.classList.add("about-info");

  infoDiv.append(monToFriday, saturday, Sunday, specialMenu);

  return infoDiv;
}

function createTimes(days, time) {
  this.days = days;
  this.time = time;
  const daysEl = document.createElement("p");
  const timeEl = document.createElement("p");
  const dayTimeDiv = document.createElement("div");

  daysEl.classList.toggle("info-days");
  timeEl.classList.toggle("info-times");
  dayTimeDiv.classList.add("days-times-container");

  daysEl.textContent = days;
  timeEl.textContent = time;

  dayTimeDiv.append(daysEl, timeEl);

  return dayTimeDiv;
}

export default function renderAbout() {
  contentEL.textContent = "";

  contentEL.append(createHeader(), createBody());
}
