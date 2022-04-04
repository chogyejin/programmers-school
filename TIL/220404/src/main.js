// const initialState = JSON.parse(localStorage.getItem("todos") || "[]");
const initialState = storage.getItem("todos", []); // storage.js 이용

const $app = document.querySelector(".app");

new App({ $target: $app, initialState });
