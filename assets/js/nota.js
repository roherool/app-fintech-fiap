window.onload = function () {
  const objTxtNota = document.getElementById("nota");
  const objDivResultado = document.getElementById("resultado");
  const objBotao = document.getElementById("botao");

  objBotao.onclick = function () {
    let objFloNota = parseFloat(objTxtNota.value);
    if (objFloNota >= 6.0) {
      objDivResultado.innerHTML = "Aluno aprovado!";
      console.log("Aluno aprovado com nota " + objFloNota);
    }
    else {
      if (objFloNota >= 4.0) {
        objDivResultado.innerHTML = "Aluno em exame!";
        console.log("Aluno em exame com nota " + objFloNota);
      }
      else {
        objDivResultado.innerHTML = "Aluno reprovado!";
        console.log("Aluno reprovado com nota " + objFloNota);
      }
    }
  }
}