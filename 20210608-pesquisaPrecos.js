const readline = require("readline-sync");
n1 = -1
n2 = -1
n3 = -1

function media() {
  // precisa conferir quantos valores foram digitados
  if (n1 <= 0 || n2 <= 0) {
    return "[ERRO] Não foi possível calcular a média: Preços inválidos."
  } else {
    // precisa calcular a média corretamente
    if (n3 <= 0) {
      return (parseFloat(n1) + parseFloat(n2))/2;
    } else {
      return (parseFloat(n1) + parseFloat(n1) + parseFloat(n3))/3;
    }
  }
}

console.log("Pesquisa de preços");
console.log("Digite o nome do produto pesquisado: ");
prod = readline.question();

console.log("Digite o preço na primeira loja: ");
n1 = readline.question();
console.log("Digite o preço na segunda loja: ");
n2 = readline.question();

console.log("Você pesquisou o preço em uma terceira loja? (s/n)");
sn = readline.question();
if (sn == 's' || sn == 'S') {
  console.log("Digite o preço na terceira loja: ");
  n3 = readline.question();
}

console.log("O preço médio de "+prod+" é:");
console.log(media());
