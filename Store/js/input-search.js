/*const $searchIcon = document.querySelector(".icon-search");
const $search = document.querySelector(".input-search");

$searchIcon.addEventListener("click", () =>
  $search.classList.toggle("-active")
);

$searchIcon.addEventListener("click", () =>
  $searchIcon.classList.toggle("-active")
);*/



const $inputSearch = document.querySelector(".input-search");
const $search = $inputSearch.querySelector(".-search")
const $close = $inputSearch.querySelector(".-close")

$search.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active")
  $search.classList.remove("-active")
  $close.classList.add("-active")
})

$close.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active")
  $close.classList.remove("-active")
  $search.classList.add("-active")
})