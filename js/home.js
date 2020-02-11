let valorInicial = 10;
const $addCarrinho = document.querySelector(".-second");

$addCarrinho.addEventListener("click", handleClick);

function handleClick() {
  //document.getElementById("sumCarrinho").innerHTML = "Mudou";
  const $carrinho = document.querySelector("#sumCarrinho");
  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
