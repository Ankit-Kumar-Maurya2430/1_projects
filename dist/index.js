const nav = document.getElementById('nav');
const navbar = document.getElementById('navbar');



nav.addEventListener("click", function (e) {
  navbar.remove(navbar)
  e.preventDefault();
});
