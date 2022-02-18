const read = require('readline-sync')

var select = 0, pessoasG = [], pessoasC = []

while(select != 9) {
    options(select)}

    
function options(x) {
    
     console.log('Programa das vacinas\n\n');
     console.log('1) Cadastrar pessoa na fila da vacina contra a gripe');   
     console.log('2) Cadastrar pessoa na fila da vacina contra a COVID');
     console.log('3) Chamar pessoa da fila para aplicar vacina contra a gripe');
     console.log('4) Chamar pessoa da fila para aplicar vacina contra a COVID');
     console.log('5) Mostrar pessoas na fila da vacina contra a gripe');
     console.log('6) Mostrar pessoas na fila da vacina contra a COVID');
     console.log('7) Gerar lista de e-mails dos vacinados contra gripe');
     console.log('8) Gerar lista de e-mails dos vacinados contra COVID');
     console.log('9) Sair do programa\n\n');
    
     console.log('Digite aqui qual função você deseja utilizar');
    
     x = read.question()

     if(x == 1){
          cadG()} 
     else if(x == 2){
          cadC()}
     else if(x == 3){
          callG()}    
     else if(x == 4){
          callC()}    
     else if(x == 5){
          showG()}    
     else if(x == 6){
          showC()}
     else if(x == 7){
           emailsG()}
     else if(x == 8){
           emailsC()}
     else if(x == 9){
         select = 9
     }   

}

function cadG() {

     function cadastroG(n,i,e,d){
      let registro = {Nome: n, Idade:i , Email: e, Data: d}

      pessoasG.push(registro);
     }
     console.clear()
     nome = read.question('Digite o nome da pessoa que vai se vacinar contra a gripe: ');
     console.clear();
     idade = read.questionInt('Digite aqui a idade de '+nome+': ');
     console.clear();
     email = read.question('Agora coloque aqui o email: ');
     console.clear();
     data = read.question('Agora a data da vacinacao no formato xx/xx/xxxx: ');
     console.clear();

     cadastroG(nome,idade,email,data); //aqui eu retorno tudo que eu defini lá naquela função pra ficar lindo

     console.log('Cadastro concluído com sucesso!');
     ent = read.question('\nPressione ENTER para continuar')
     console.clear()
}
function cadC() {

     function cadastroC(n,i,e,d){
          let registro = {Nome: n, Idade:i , Email: e, Data: d}
          pessoasC.push(registro);
         }
         console.clear()
         nome = read.question('Digite o nome da pessoa que vai se vacinar contra a COVID: ');
         console.clear();
         idade = read.questionInt('Digite aqui a idade de '+nome+': ');
         console.clear();
         email = read.question('Agora coloque aqui o email: ');
         console.clear();
         data = read.question('Agora a data da vacinacao no formato xx/xx/xxxx: ');
         console.clear();
    
         cadastroC(nome,idade,email,data);
    
         console.log('Cadastro concluído com sucesso!');
         ent = read.question('\nPressione ENTER para continuar')
         console.clear()
    }
    

function callG(){

    if (pessoasG == undefined){
     console.clear()
     console.log('Não há pessoas na fila de vacinação contra gripe.\n');
     ent = read.question('Pressione ENTER para continuar')}

    else{
    console.clear()
    console.log(pessoasG.shift(),'\ncomparecer a ala de vacinação contra gripe.');
    ent = read.question('\n\nPressione ENTER para continuar')
    console.clear()
     }
}

function callC(){

     if (pessoasC == undefined){
          console.clear()
          console.log('Não há pessoas na fila de vacinação contra covid.\n');
          ent = read.question('Pressione ENTER para continuar')}

     else{
     console.clear()
     console.log(pessoasC.shift(),'\ncomparecer a ala de vacinação contra COVID.');
     ent = read.question('Pressione ENTER para continuar')
     console.clear()}
}


function showG(){
console.clear

if(pessoasG.length>0){
     console.clear()
   for(x = 0;x<pessoasG.length;x++){
        console.log(pessoasG[x]);
   }
}
 else{
     console.clear()
      console.log('Não tem nenhuma pessoa na fila de vacinação contra a gripe.\n');
 }

    ent = read.question('Pressione ENTER para continuar')
    console.clear()}
   

    function showC(){
     if(pessoasC.length>0){
          console.clear()
        for(x = 0;x<pessoasC.length;x++){
             console.log(pessoasC[x]);
        }
     }
      else{
          console.clear()
           console.log('Não tem nenhuma pessoa na fila de vacinação contra a gripe.\n');
      }
     
         ent = read.question('Pressione ENTER para continuar')
         console.clear()
     }

function emailsG(){

     console.clear()
     var dataSel = read.question('Digite aqui a data em que a vacina foi aplicada: ')
     var filtrarG = pessoasG.filter(pessoas => pessoas.Data == dataSel)
     .map(g => g.Email)
     console.clear()
     console.log('Os emails das pessoas vacinadas contra gripe em ',dataSel,' são: ' );
     console.log(filtrarG);
     
     ent = read.question('\n\nPressione ENTER para continuar')
}

function emailsC(){

          console.clear()
          var dataSel = read.question('Digite aqui a data em que a vacina foi aplicada: ')
          var filtrarC = pessoasC.filter(pessoas => pessoas.Data == dataSel)
          .map(x => x.Email)
          console.clear()
          console.log('Os emails das pessoas vacinadas contra COVID em ',dataSel,' são: ' );
          console.log(filtrarC);
         
          
          ent = read.question('\n\nPressione ENTER para continuar')
     }
     