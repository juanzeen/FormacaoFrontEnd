const leia = require("readline-sync");
const funcoes = require("/Códigos/modulo");
const fs = require("fs");

function registraOperacao(op, v1, v2) {
const registro = { operacao: op, valor1: v1, valor2: v2 }
operacoes.push(registro);
fs.writeFileSync("dados/operacoes.json", JSON.stringify(operacoes));
}

let continua = true;
let operacoes = [];
if (fs.existsSync("dados/operacoes.json")) {
operacoes = JSON.parse(fs.readFileSync("dados/operacoes.json"));
}
while (continua) {
console.log("Calculadora");
console.log("Digite a operação que você quer realizar:");
console.log("1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n5- Mostrar Operações\n6- Apagar todas as operações\n7- Apagar uma operação");
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
case 5:
if (operacoes.length > 0) {
console.log("Operações realizadas até agora:\n");
operacoes.forEach(operacao => {
console.log(operacao);
//console.log(operacao.operacao + " " + operacao.valor1 + " " + operacao.valor2);
});
} else {
console.log("Nenhuma operação realizada até agora.");
}
break;
case 6:
if (operacoes.length > 0) {
console.log("Deseja apagar todas as operações realizadas? (S/N)");
let resp = leia.question();
if (resp.toUpperCase() == "S") {
operacoes = [];
fs.writeFileSync("dados/operacoes.json", JSON.stringify(operacoes));
console.log("Operações apagadas.");
} else {
console.log("Operações não foram apagadas.");
}
} else {
console.log("Nenhuma operação realizada até agora.");
}
break;
case 7:
let i = 1
if (operacoes.length > 0) {
console.log("Operações realizadas até agora:\n");
operacoes.forEach(operacao => {
console.log("("+i+")");
i++
console.log(operacao);
});
console.log("Digite o número da operação que deseja apagar: ");
let indice = leia.questionInt();
indice--; // para que o indice seja o mesmo do array
if (indice >= 0 && indice < operacoes.length) {
operacoes.splice(indice, 1);
fs.writeFileSync("dados/operacoes.json", JSON.stringify(operacoes));
console.log("Operação apagada.");
} else {
console.log("Operação não encontrada.");
}
} else {
console.log("Nenhuma operação realizada até agora.");
}
break;
default: console.log("Operação inválida!");
}

console.log("\nDeseja continuar? (S/N) ");
continua = leia.question();
continua = continua.toLowerCase();
if (continua.charAt(0) === 's') {
continua = true;
} else {
continua = false;
}
}