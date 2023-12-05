const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);
  const terceirop = preco / 2
  const valortotal = (3 * preco) - terceirop
  resp1.innerText = produto + "- Promoção leve 3 por: "+ valortotal.toFixed(2);
  resp2.innerText = "O 3°produto custa apenas R$" + terceirop.toFixed(2);
  resp1.innerText = "teste"
 
})

function mostrarContainer() {
  
  resp.style.display = "flex";
}
