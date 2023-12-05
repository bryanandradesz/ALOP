const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");


frm.addEventListener("submit", (e) => {
const tempo = frm.inTempo.value;
const valor = frm.inValor.value;
const fracoes = Math.ceil(tempo / 15);
const total = fracoes * valor;

  resp1.innerText = "Valor a pagar: R$"+ total.toFixed(2);
  e.preventDefault();
})

