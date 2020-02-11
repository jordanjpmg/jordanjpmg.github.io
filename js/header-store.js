const $headerStore = document.querySelector("header-store");
const $formAnchor =document.querySelector(".form-anchor");
const $menu = document.querySelector(".-menu");


$menu.addEventListener("click" , () => {
  
  $formAnchor.classList.toggle("-active")
})  