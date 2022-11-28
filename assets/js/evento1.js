window.onload = function () {
  var objRetangulo = document.getElementById("retangulo");

  objRetangulo.onmouseover = function () {
    objRetangulo.style.backgroundColor = "#008000";
  }

  objRetangulo.onmouseout = function () {
    objRetangulo.style.backgroundColor = "";
  }
}