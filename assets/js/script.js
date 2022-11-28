window.onload = function () {
  const objBotao = document.getElementById("botao")

  objBotao.onclick = function exibirFrase() {
    window.alert("Alô Mundo!")
  }
}

var vIndefinido;
console.log(typeof vIndefinido);

/* Exemplo de booleano */
var vBooleano = true;
console.log(typeof vBooleano);

/* Exemplo de alfanumérico (string) */
var vAlfanumerico = "Exemplo curso de JavaScript";
console.log(typeof vAlfaNumerico);

/* Exempo númericos */
var vNumeroInteiro = -159;
console.log(typeof vNumeroInteiro);

var vNumeroFracionado = 2345.45;
console.log(typeof vNumeroFracionado);

/* Exemplo de array */
var vArrayNums = [10, 20, 30];
console.log(typeof vArrayNums);

/* Exemplo de objeto */
var vAluno = { name: 'Fulano de Tal', age: 18 };
console.log(typeof vAluno);