window.onload = function () {
  var linguagens = ["JavaScript", "Java", "PHP", "Python"]

  var objLinguagem = document.getElementById("linguagem");

  // Estrutura for..of
  for (linguagem of linguagens) {
    objLinguagem.innerHTML += linguagem + "<br>";
  }
}