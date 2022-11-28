
window.onload = function () {
  var objSaidaDoWhile = document.getElementById("saida-do-while")

  do {
    objSaidaDoWhile.innerHTML += i + "<br>";
    i++;
  } while (i > 10);
}