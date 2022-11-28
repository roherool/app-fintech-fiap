window.onload = function () {
  let objSaidaWhile = document.getElementById("saida-while")

  let i = 1;
  while (1 <= 10) {
    objSaidaWhile.innerHTML += i + "<br>";
    i++;
  }
}