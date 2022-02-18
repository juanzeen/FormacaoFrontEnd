const read = require('readline-sync');
const fs = require('fs');

let opt = 1
let moedas = []
let tarifas = []
let posicao = 1
let valorFinal 

if(fs.existsSync("moedas.json")) {
    moedas = JSON.parse(fs.readFileSync("moedas.json"));
    while(posicao<=moedas.length){
        posicao++
    }
}

    if(fs.existsSync("tarifas.json")) {
        tarifas = JSON.parse(fs.readFileSync("tarifas.json"));
    }



while(opt !=5) {

    console.log("\nMenu de Funções\n");

    console.log('1) Converter moedas\n');
    console.log('2) Mostrar tarifas\n');
    console.log('3) Atualizar tarifas\n');
    console.log('4) Adicionar tarifas\n');
    console.log('5) Parar o programa\n');

    opt = read.question('\n\nQual funcao deseja usar? ')
    

    switch(opt){

        case '1': converter();
        break;

        case '2': mostrarTarifas();
        break;

        case '3': atualizarTarifas();
        break;

        case '4': adcMoedasETarifas(); 
        break;

        case '5': console.log('\n\nVocê parou o programa.');
        break;

        default: 
        console.log('\nOpção inválida, rode o código novamente.');
        funcaoEnter()
        break;
    }
}

function converter(){
    if(moedas.length>0){
        console.clear()
        console.log(moedas);
        console.log('Qual moeda você deseja converter?');
    let opt = read.questionInt('P: ')
    opt--
let tarifaFinal = tarifas[opt]
    tarifaFinal = parseFloat(tarifaFinal)
    console.clear()
    console.log('Valor da tarifa: ', tarifaFinal);
let valorInicial = read.questionFloat('Digite o valor a ser convertido: ')
    valorFinal = valorInicial*tarifaFinal
    console.log('O valor convertido é: ',valorFinal);
    funcaoEnter()
    console.clear()
}

else{
    console.clear()
    console.log('Registre uma moeda na função 4.');
    funcaoEnter()
    console.clear()
}
 
}

function mostrarTarifas(){
    if(moedas.length>0){
        console.clear()
    for(let x = 0; x< tarifas.length; x++){
        
        console.log(moedas[x]);
        console.log('Tarifas de conversão:',tarifas[x]);
    }
funcaoEnter()
console.clear()
}

    else{
        console.clear()
        console.log('Vá na função 4 e adicione uma moeda.');
        funcaoEnter()
        console.clear()
    }
}

function atualizarTarifas() {
    if(tarifas.length>0){
    console.clear()
    console.log('Selecione a tarifa que deseja alterar:');
    for(let x = 0; x<tarifas.length;x++){
        console.log(moedas[x]);
        console.log('Tarifa: ', tarifas[x]);
    }

let tarifaSel = read.questionInt('\nPosição: ')
let novaTarifa = read.questionFloat('Coloque aqui a nova tarifa: ')
tarifaSel--
tarifas[tarifaSel] = novaTarifa
fs.writeFileSync("tarifas.json", JSON.stringify(tarifas))
console.clear()

    for(let x = 0; x<tarifas.length;x++){
        console.log(moedas[x]);
        console.log('Tarifa: ', tarifas[x]);
    }

    funcaoEnter()
    console.clear()
    }
    else{
        console.clear()
        console.log('Vá na função 4 e adicione uma moeda.');
        funcaoEnter()
        console.clear()
    }

  }



function adcMoedasETarifas(){
    
    function cadMoeda(p, mO, mD) {
        let register = { 'Posição:': p,'Moeda de origem:': mO, 'Moeda de destino': mD}
        moedas.push(register);
}
    console.clear()
    moedaOrigem = read.question('Coloque aqui a moeda de origem: ');
    moedaDestino = read.question('Coloque aqui a moeda de destino: ');
    cadMoeda(posicao, moedaOrigem, moedaDestino);
    fs.writeFileSync("moedas.json", JSON.stringify(moedas))

function cadTarifas(t){

    let registro = [t]
    tarifas.push(registro)
}

let tarifa = read.questionFloat('Coloque aqui o valor da tarifa: ')
cadTarifas(tarifa)
fs.writeFileSync("tarifas.json", JSON.stringify(tarifas))
funcaoEnter()
posicao++
console.clear()

}

function funcaoEnter(){
    let enter
    console.log('\nPressione qualquer tecla para continuar.');
    read.question(enter)
}