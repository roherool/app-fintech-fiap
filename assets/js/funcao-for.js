window.onload = function () {
  var objSaidaFor = document.getElementById("saida-for")

  for (var i = 1; i <= 10; i++) {
    objSaidaFor.innerHTML += i + "<br>";
  }
}