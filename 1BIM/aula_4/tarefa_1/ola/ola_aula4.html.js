const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  resp1.innerText = "Olá, " + nome;
  e.preventDefault();
});
