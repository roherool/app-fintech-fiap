window.onload = function () {
  var objBotao = document.getElementById("botao");
  var objCidades = document.getElementById("cidades");

  objBotao.onclick = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cidades").innerHTML = "<pre>" + xhttp.responseText + "</pre>";
      }
    }

    xhttp.open("GET", "ajax1_cidades.txt", true);
    xhttp.send();
  }
}