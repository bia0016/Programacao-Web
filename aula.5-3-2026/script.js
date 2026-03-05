alert("Olá mundo!");
console.log("Teste em js");

//variaveis:
var animal = 'gato'; //string pode ser com "aspas duplas" ou 'aspas simples'
console.log(animal);
let nomeCompleto = 'fulano';
console.log(nomeCompleto);
const valor0 = 10;
console.log(valor0);

//verificação de tipos:
var valor1 = 15;
console.log(typeof valor1); //typeof é para debugar o codigo

//algoritmo: entrada + processamento + saída
//var nome = window.prompt("Nome: "); //imput
//console.log("Seja bem-vindo(a) " + nome + ". Aproveite!");
//console.log(``); - template literal
//console.log(`Seja bem-vindo(a) ${nome}. Aproveite!`); - com crase
//document.writeln(`Seja bem-vindo(a) ${nome}. Aproveite!`);

//operadores aritméticos: + - * / ** 
//2 + 4 * 2

//operadores de comparação: <> <= >= == != === !==
console.log(5 == '5'); //igualdade - olha apenas os valores
console.log(5 === '5'); //estritamente igual - olha tipos e valores 
console.log(5 != '5');
console.log(5 !== '5');

var num1 = parseInt(window.prompt("valor 1: "))
var num2 = parseInt(window.prompt("valor 2: "))
var num3 = num1 + num2;
document.writeln(`A soma de ${num1} + ${num2} = ${num3}`);
//parseInt 