const read = require('readline-sync')
moedas = []
tarifas = []
validar = true
posicao = 1
while(validar==true){
    console.clear()
    console.log('\n\t\tBem vindo, selecione uma opção para continuar\n')
    console.log('1 - 1- converter valores\t\t\t2 - exibir tarifas de conversão')
    console.log('3 - atualizar tarifas de conversão\t\t4 - cadastrar tarifas de conversão')
    console.log('5 - Sair\n')
    opcInicial = read.questionInt('R: ')

    switch (opcInicial){
        case 1:
            converterValores()
            break
        case 2:
            exibirTarifas()
            break
        case 3:
            AtualizarValores()
            break
        case 4:
            cadastrarTarifas()
            break
        case 5:
            sair()
            break
    }
}
//--------------------------------------------------------------------1-------------------------------------------------------------------
function converterValores(){
    if(moedas.length > 0){ 
        let conversaoFinal
        console.log(moedas)
        console.log("\nQual valor deseja converter?(N°)")
        opcMoeda = read.questionInt('R: ')
        opcMoeda--
        if(opcMoeda < tarifas.length){
            tarifaFinal = tarifas[opcMoeda]
            tarifaFinal = parseFloat(tarifaFinal)
            console.log('Valor da tarifa',tarifaFinal)
            console.log('Digite o valor a ser convertido')
            valor = read.questionInt('R: ')
            conversaoFinal = valor * tarifaFinal
            console.log(conversaoFinal)
            wait()
        }
        else{
            console.clear()
            console.log('Opção invalida')
            console.log('Tarifas cadastradas: ',moedas.length)
            wait()
        }
    }
    else{
        console.clear()
        console.log('ERRO404')
        console.log('insira as moedas e as tarifas primeiramente\n')
        wait()
    }
}
//-----------------------------------------------------------------2----------------------------------------------------------------------
function exibirTarifas(){
    if(moedas.length > 0){
        console.log('Valor das tarifas:')
        valorDasTarifas=tarifas.length
        for(let x=0;x<valorDasTarifas;x++){
            console.log(moedas[x])
            console.log('tarifa: ',tarifas[x])
        }
        wait()
    }
    else{
        console.clear()
        console.log('ERRO404')
        console.log('insira as moedas e as tarifas primeiramente\n')
        wait()
    }
}
//--------------------------------------------------------------------3-------------------------------------------------------------------
function AtualizarValores(){
    if(moedas.length > 0){
        console.clear()
        console.log('Escolha qual tarifa gostaria de atualizar: ')
        valorDasTarifas=tarifas.length
        for(let x=0;x<valorDasTarifas;x++){
            console.log(moedas[x])
            console.log('tarifa: ',tarifas[x])
        }
        opcEscolher = read.questionInt('N: ')
        novoTarifa = read.questionFloat('Agora escreva um novo valor para a tarifa: ')
        opcEscolher--
        tarifas[opcEscolher] = novoTarifa

        valorDasTarifas=tarifas.length
        for(let x=0;x<valorDasTarifas;x++){
            console.log(moedas[x])
            console.log('tarifa: ',tarifas[x])
        }

        wait()
    }
    else{
        console.clear()
        console.log('ERRO404')
        console.log('insira as moedas e as tarifas primeiramente\n')
        wait()
    }

}
//---------------------------------------------------------------------4------------------------------------------------------------------
function cadastrarTarifas(){
    function cadastrarM(num,M1,M2){
        let registro = {
            'N°': num,
            "Primeira Moeda": M1,
            "Segunda Moeda": M2
        }
        moedas.push(registro)
    }
        
        Pmoeda = read.question('Primeira Moeda: ')
        Smoeda = read.question('Segunda Moeda: ')
        cadastrarM(posicao,Pmoeda,Smoeda)
        console.log(moedas)
    wait()
    function cadastrarT(tarifa){
        let registro = [tarifa]
        tarifas.push(registro)
    }   
    tarifa2 = read.questionFloat('Agora digite a tarifa: ')
    cadastrarT(tarifa2)
    console.log(tarifas)
    wait()
    posicao++
}
//----------------------------------------------------------------------5-----------------------------------------------------------------
function sair(){
    validar = false
    console.log('Obrigado pela preferência, até a próxima meu chapa')
}
//--------------------------------------------------------------------6-------------------------------------------------------------------
function wait(){
    read.question('Clique em qualquer tecla para continuar: ')
}