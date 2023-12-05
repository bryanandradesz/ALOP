function calcularPesoIdeal() {
  const nome = document.getElementById("inNome").value;
  let altura = document.getElementById("inAltura").value;
  const peso = parseFloat(document.getElementById("inPeso").value);
  const genero = document.querySelector('input[name= "gender"]:checked').value;

  if (altura.includes(',')) {
    altura = altura.replace(',', '.');
    altura = parseFloat(altura)
  } else if(altura >= 3) {
    altura = altura / 100
  }

  let pesoIdeal = 0;
  let resultado = "";

  if (genero === "male") {
    pesoIdeal = 22 * altura ** 2;
  } else if (genero === "female") {
    pesoIdeal = 21 * altura **2;
  }

  const pesoMinimo = pesoIdeal - 2;
  const pesoMaximo = pesoIdeal + 2;

  if (peso < pesoMinimo) {
    const pesoFaltante = pesoMinimo - peso;
    resultado = `${nome}, seu peso está abaixo do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg mas pode estar entre ${pesoMinimo.toFixed(2)}kg e ${pesoMaximo.toFixed(2)}kg. Você precisa ganhar ${Math.abs(pesoFaltante.toFixed(2))} kg para atingir o peso peso ideal.`;
  } else if (peso > pesoMaximo) {
    const pesoExcendente = peso - pesoMaximo;
    resultado = `${nome}, seu peso está acima do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg mas pode estar entre ${pesoMinimo.toFixed(2)}kg e ${pesoMaximo.toFixed(2)}kg. Você precisa perder ${Math.abs(pesoExcendente.toFixed(2))} kg para atingir o peso peso ideal.`;
  } else {
    resultado = `${nome}, seu peso está dentro do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg.`;
  }

  document.getElementById("fim").textContent = resultado;
}