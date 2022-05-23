
// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const theLinks = document.querySelectorAll(".menu__link");
const btn = document.getElementById("hamRotate")

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    btn.classList.toggle("active")
  });
}

function myFunction() {
  menuBody.classList.toggle("_active");

}
theLinks.forEach(link => link.addEventListener("click", ()=>{
  menuBody.classList.remove("_active");
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('_active');
  btn.classList.remove("active")
}))

