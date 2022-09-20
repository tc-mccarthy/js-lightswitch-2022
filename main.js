const off_switch = document.querySelector(".lights-on img");
const on_switch = document.querySelector(".lights-off img");
const body = document.querySelector("body");

off_switch.addEventListener("click", function (e) {
  e.preventDefault();

  body.classList.add("off");
});

on_switch.addEventListener("click", function (e) {
  e.preventDefault();

  body.classList.remove("off");
});
