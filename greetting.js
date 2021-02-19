const form = document.querySelector(".js-form"), // <form>
  input = form.querySelector("input"), // <input>
  greeting = document.querySelector(".js-greetings"); // <h4>

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  JSFORM_INPUT = "js-form";

// ----------------------------------------------------------------
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  form.classList.remove(JSFORM_INPUT);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const userName = localStorage.getItem(USER_LS); // BJ
  if (userName === null) {
    askForName();
  } else {
    paintGreeting(userName);
  }
}

function init() {
  loadName();
}

init();
