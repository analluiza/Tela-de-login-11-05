//Atividade 01. 
//Questão 1

function calcule(numero){
return parseFloat(prompt(numero))
}

var num1 = calcule("Digite um número:");
var num2 = calcule("Digite um número:");
var num3 = calcule("Digite um número:");
 
var média =(num1+num2+num3)/3
 window.prompt("A média aritimética é:" + média);


