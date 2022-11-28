window.onload = function () {
  const objTxtSigla = document.getElementById("sigla");
  const objDivEstado = document.getElementById("estado");
  const objBotao = document.getElementById("botaoEstado");

  objBotao.onclick = function () {
    switch (objTxtSigla.value) {
      case "SP":
        objDivEstado.innerHTML = "São Paulo";
        break;
      case "RJ":
        objDivEstado.innerHTML = "Rio de Janeiro";
        break;
      case "MG":
        objDivEstado.innerHTML = "Minas Gerais";
        break;
      case "ES":
        objDivEstado.innerHTML = "Espírito Santo";
        break;
      default:
        objDivEstado.innerHTML = "Não é um estado do sudeste";
    }
  }
}