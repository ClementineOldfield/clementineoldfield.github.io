function toggleClass() {
  var burger = document.getElementById("hamburger");
  burger.classList.toggle("active");

  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

window.onload = function() {
  var burger = document.getElementById("hamburger");
  burger.classList.remove("active");

  var menu = document.getElementById("menu");
  menu.classList.remove("active");
};
