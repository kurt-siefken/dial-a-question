//---------------- HAMBURGER MENU -----------------------//

const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const sideMenu = document.querySelector("#sideMenu");
const overlay = document.querySelector("#overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("open");
}

function closeSideMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("open");
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

//---------------- HAMBURGER MENU -----------------------//