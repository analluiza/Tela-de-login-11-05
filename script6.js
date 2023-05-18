/*Questão 6
function calcule(numero) {
    return parselFloat(prompt(numero))
}
var num = calcule(Number(`Digite o primeiro número:`));
var num1 = calcule(Number(`Digite o segundo número:`));

var selecao = calcule(Number(`Digite a seleção escolhida:`));

if(selecao === '1') {
    window.alert()
}*/

var num = Number(window.prompt(`Digite o primeiro número:`));
var num1 = Number(window.prompt(`Digite o segundo número:`));
var selecao = Number(window.prompt(`Digite a seleção escolhida(1 para soma, 2 para multiplicação e 3 para divisão):`));
var resultado

switch (selecao){
  case 1: resultado = num + num1; break;
  case 2: resultado = num * num1; break;
  case 3: resultado = num / num1; break;
  default:window.alert("Código de seleção inválido !")
}

window.alert(`o resutado é: ${resultado}`)


