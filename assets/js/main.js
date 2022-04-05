

var navButton = document.querySelector("#nav-menu-button");
var navUl = document.querySelector(".nav-ul");

navButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  console.log('FLAG 2');
  if (navUl.classList.contains("hide-ul")) {
    navUl.classList.remove("hide-ul");
  } else {
    navUl.classList.add("hide-ul");
  }  
}




