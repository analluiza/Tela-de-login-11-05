//

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

