const $coracao = document.querySelector(".coracao");
const $stars = document.querySelectorAll(".star");

const positionLast = $stars.length - 1;

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }
  if (key > 0 && key < positionLast) {
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
  if (key == positionLast) {
    $star.addEventListener("click", lastStar);
  }
});

$coracao.addEventListener("click", handleClickHeart);

function handleClickHeart() {
  $coracao.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active"); //toggle : adiciona e remove
}

function middleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}
