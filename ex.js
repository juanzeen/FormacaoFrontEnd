const leia = require("readline-sync");
const funcoes = require("./modulo");

function registraOperacao(op, v1, v2) {
let registro = { operacao: op, valor1: v1, valor2: v2 }
operacoes.push(registro);
}

let continua = true;
let operacoes = [];
while (continua) {
console.log("Calculadora");
console.log("Digite a operação que você quer realizar:");
console.log("1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n5- Mostrar Operações");
let op = leia.question();
op = parseInt(op);
let x, y
if (op >= 1 && op <= 4) {
console.log("Digite um número: ");
x = leia.question();
x = parseFloat(x);
console.log("Digite outro número: ");
y = leia.questionFloat();
}
switch (op) {
case 1: console.log("Resultado da Soma: " + funcoes.soma(x, y));
registraOperacao("+", x, y);
break;
case 2: console.log("Resultado da Subtração: " + funcoes.sub(x, y));
registraOperacao("-", x, y);
break;
case 3: console.log("Resultado da Multiplição: " + (x * y));
registraOperacao("x", x, y);
break;
case 4: console.log("Resultado da Divisão: " + (x / y));
registraOperacao("/", x, y);
break;
case 5: console.log("Operações realizadas até agora:\n");
operacoes.forEach(operacao => {
console.log(operacao);
//console.log(operacao.operacao + " " + operacao.valor1 + " " + operacao.valor2);
});
// Dica para o Exercício:
//valorConvertido = operacoes[optConversao].valor1 * valorDigitado
break;
default: console.log("Operação inválida!");
}

console.log("\nDeseja continuar? (S/N) ");
continua = leia.question();
//MARIOLAEHBOM // Uppercase (Maiúsculo)
//mariolaehbom // Lowercase (Minúsculo)
//MariolaEhBom // Camelcase (CamelCase)
continua = continua.toLowerCase();
if (continua.charAt(0) === 's') {
continua = true;
} else {
continua = false;
}
}