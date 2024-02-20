var input = document.querySelector("input");
var lowercase = document.querySelector(".lowercase");
var uppercase = document.querySelector(".uppercase");
var number = document.querySelector(".number");
var symbol = document.querySelector(".symbol");
var characters = document.querySelector(".characters");
var eye = document.querySelector(".form-input i");

eye.addEventListener("click", function () {
  input.getAttribute("type") === "text"
    ? input.setAttribute("type", "password")
    : input.setAttribute("type", "text");
  this.classList.toggle("show");
});

input.addEventListener("input", function () {
  let val = this.value;
  /[a-z]/.test(val)
    ? lowercase.classList.add("valid")
    : lowercase.classList.remove("valid");
  /[A-Z]/.test(val)
    ? uppercase.classList.add("valid")
    : uppercase.classList.remove("valid");
  /[0-9]/.test(val)
    ? number.classList.add("valid")
    : number.classList.remove("valid");
  /[\W]/.test(val)
    ? symbol.classList.add("valid")
    : symbol.classList.remove("valid");
  val.length >= 8
    ? characters.classList.add("valid")
    : characters.classList.remove("valid");
});
