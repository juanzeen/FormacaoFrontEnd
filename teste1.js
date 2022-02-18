const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetor2 = [ {multiplicador: 1}, {multiplicador: 2}, {multiplicador: 3}, {multiplicador: 4}, {multiplicador: 5}, {multiplicador: 6}, {multiplicador: 7}, {multiplicador: 8}, {multiplicador: 9}, {multiplicador: 10}];
let resultados = []
const leia = require('readline-sync');
console.log('Digite um número inteiro: ');
let x = leia.questionInt();
/*for (let index = 0; index < vetor.length; index++) {
    const element = vetor[index];
    resultados[index] = x * element;
    console.log(element +  " x " + x + " = " + (resultados[index]));
}*/
//resultados = vetor.map(element => x * element);
resultados = vetor2.map(element => x * element.multiplicador);
console.table(resultados);