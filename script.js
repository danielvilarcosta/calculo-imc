function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value) / 100;

  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  let imc = peso / (altura * altura);
  let mensagem;

  if (imc < 18.5) {
    mensagem = "Abaixo do peso";
  } else if (imc < 25) {
    mensagem = "Peso normal";
  } else if (imc < 30) {
    mensagem = "Sobrepeso";
  } else {
    mensagem = "Obesidade";
  }

  document.getElementById("resultado").innerHTML =
    "Seu IMC é: " + imc.toFixed(2) + " - " + mensagem;
}
