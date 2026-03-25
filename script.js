const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

//abrir/cerrar el menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//Cerrar menú al hacer clic fuera
document.addEventListener("click",(e) => {
    if (
        !menuToggle.contains(e.target) &&
        !navMenu.contains(e.target)
    ){
        navMenu.classList.remove("active");
    }
});