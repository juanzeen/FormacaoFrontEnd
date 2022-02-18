const leia = require('readline-sync');
let opt = 1
let valorOrigem
let enter
let realDol = 3.88
let escolherMoeda
let valorFinal

console.log("\nMenu de Funções\n");

while(opt !=4) {
    console.log('1) Converter\n');
    console.log('2) Mostrar tarifa\n');
    console.log('3) Atualizar tarifa \n');
    console.log('4) Parar programa\n');

    console.log('\n\nQual funcao você deseja usar? ')
    opt = leia.question()
    

    switch(opt){

        case '1': converter();
        break;

        case '2': mostrarTarifa();
        break;

        case '3': atualizarTarifa();
        break;

        case '4': console.log('\n\nVocê parou o programa.');
        break;

        default: 
        console.log('\nOpção inválida, pressione qualquer tecla pra rodar o código novamente.');
        enter = leia.question();
        break;
    }
}

function converter(){
    console.log('');
    console.log('\n\nSelecione a conversão que você deseja realizar\n');
    console.log('1) Real para Dólar\n');
    console.log('2) Dólar para Real\n');   

    escolherMoeda = leia.questionInt('Digite aqui o que deseja relizar : ')
    switch(escolherMoeda){

        case 1: valorOrigem = leia.questionFloat('Digite aqui o valor que deseja converter: ')
        valorFinal = valorOrigem/realDol
        console.log('\nO valor convertido é: '+valorFinal);
        enter = leia.question('\nPressione qualquer tecla para continuar! ');
        break

        case 2: valorOrigem = leia.questionFloat('Digite aqui o valor que deseja converter: ')
        valorFinal = valorOrigem*realDol
        console.log('\nO valor convertido é: '+valorFinal);
        enter = leia.question('\nPressione qualquer tecla para continuar! ');
        break

        case 3: while(escolherMoeda !=1 || escolherMoeda != 2){
            console.log('Opção inválida, tente novamente.\n');
            console.log('\nSelecione a conversão que você deseja realizar\n');
            console.log('1) Real para Dólar\n');
            console.log('2)Dólar para Real\n');   
            
            escolherMoeda = leia.questionInt('Digite aqui o que deseja relizar : ')
        
        }
        break

    }
}

function mostrarTarifa(){
    console.log('\n\nA tarifa é:\n');
    console.log('Real para dólar: '+realDol+'R$');


    enter = leia.question('\nPressione qualquer tecla para continuar! ');
}

function atualizarTarifa() {
    console.log('\nSeleciona a tarifa que você deseja atualizar');
    console.log('\n\n1) Real para dólar');
   
  

    escolherMoeda = leia.question();

    switch(escolherMoeda){

        case '1': realDol = leia.questionFloat('Coloque aqui a nova tarifa do dolar: ');
        break;



        default: while(escolherMoeda != '1' ){
        console.log('\nEssa opção não existe, tente novamente.');
        console.log('\n\n1) Real para dólar');
     

        escolherMoeda = leia.question();
        } 
      } 
    }