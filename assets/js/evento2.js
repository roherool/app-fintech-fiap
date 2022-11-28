window.onload = function () {
  var objCep = document.getElementById("cep");
  var objMsgCep = document.getElementById("msgCep");

  objCep.onblur = function () {
    var objRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");
    if (objRegExp.test(objCep.value) == true) {
      objCep.style.borderColor = "#008000";
      objMsgCep.style.color = "#008000";
      objMsgCep.innerHTML = "CEP preenchido com sucesso!"
    } else {
      objCep.style.borderColor = "#FF0000";
      objMsgCep.style.color = "#FF0000";
      objMsgCep.innerHTML = "CEP inválido! Informe novamente!"
    }
  }

  objCep.onfocus = function () {
    objCep.style.borderColor = "";
    objCep.value = "";
    objMsgCep.style.color = "";
    objMsgCep.innerHTML = ""
  }
}