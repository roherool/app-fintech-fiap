function soma(num1, num2) {
  return num1 + num2;
}

window.onload = function () {
  objBotao = document.getElementById("botao-soma")
  objBotao.onclick = function () {
    objNum1 = document.getElementById("num1");
    objNum2 = document.getElementById("num2");
    objResultado = document.getElementById("resultado-soma");
    objResultado.innerHTML += soma(
      parseInt(objNum1.value),
      parseInt(objNum2.value)
    ) + "<br>";
  }
}
