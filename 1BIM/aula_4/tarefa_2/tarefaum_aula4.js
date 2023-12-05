const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);
  const entrada =  Math.floor(preco * 100 - Math.floor(preco) * 100) * 2 / 100;
  const entrada2 = preco * 2
  const valortotal = entrada2 - entrada

  resp1.innerText = "Promoção de "+ medicamento;
  resp2.innerText = "Leve 2 por apenas R$"+ valortotal.toFixed(2);
  e.preventDefault();
})

