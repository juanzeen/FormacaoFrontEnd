const read = require('readline-sync');
const fs = require('fs');

let option = 1
let currencies = []
let tariffs = []
let position = 1
let finalValue 

if (fs.existsSync("currencies.json")) {
    currencies = JSON.parse(fs.readFileSync("currencies.json"));
    while(position<=currencies.length){
        position++
    }
}

    if (fs.existsSync("tariffs.json")) {
        tariffs = JSON.parse(fs.readFileSync("tariffs.json"));
    }


while(option !=5) {

    console.log("\nFunction menu\n");

    console.log('1) Convert currency\n');
    console.log('2) Display tariffs\n');
    console.log('3) Update tariffs \n');
    console.log('4) Add tariffs\n');
    console.log('5) Stop the program\n');

    option = read.question('\n\nWhich function do you want to use? ')
    

    switch(option){

        case '1': convert();
        break;

        case '2': showTariffs();
        break;

        case '3': updateTariffs();
        break;

        case '4': addCurenciesNTariffs(); 
        break;

        case '5': console.log('\n\nYou stop the program.');
        break;

        default: 
        console.log('\nInvalid option, press ENTER to run code again.');
        enter = read.question();
        break;
    }
}

function convert(){
    if(currencies.length>0){
        console.clear()
        console.log(currencies);
        console.log("Which currency do you want to convert?");
    let opt = read.questionInt('P: ')
    opt--
let finalT = tariffs[opt]
    finalT = parseFloat(finalT)
    console.clear()
    console.log('Tariff value: ', finalT);
let firstValue = read.questionFloat('Enter the value to be converted: ')
    finalValue = firstValue*finalT
    console.log('The converted value is: ',finalValue);
    enterF()
    console.clear()
}

else{
    console.clear()
    console.log('Go to the function 4 and regist a currency.');
    enterF()
    console.clear()
}
 
}

function showTariffs(){
    if(currencies.length>0){
        console.clear()
    for(let x = 0; x< tariffs.length; x++){
        
        console.log(currencies[x]);
        console.log('Tariff of conversion:',tariffs[x]);
    }
enterF()
console.clear()
}

    else{
        console.clear()
        console.log('Please go to the function 4 and insert a currency.');
        enterF()
        console.clear()
    }
}

function updateTariffs() {
    if(tariffs.length>0){
    console.clear()
    console.log('Choose wich tariff you want to update:');
    for(let x = 0; x<tariffs.length;x++){
        console.log(currencies[x]);
        console.log('Tariff: ', tariffs[x]);
    }

let tariffSel = read.questionInt('\nPosition: ')
let newTariff = read.questionFloat('Enter here the new tariff: ')
tariffSel--
tariffs[tariffSel] = newTariff
fs.writeFileSync("tariffs.json", JSON.stringify(tariffs))
console.clear()

    for(let x = 0; x<tariffs.length;x++){
        console.log(currencies[x]);
        console.log('Tariff: ', tariffs[x]);
    }

    enterF()
    console.clear()
    }
    else{
        console.clear()
        console.log('Please go to the function 4 and insert a currency.');
        enterF()
        console.clear()
    }

  }



function addCurenciesNTariffs(){
    
    function cadCurrency(p, oC, dC) {
        let register = { 'Position:': p,'Origin currency:': oC, 'Destiny currency': dC}
        currencies.push(register);
}
    console.clear()
    originCurrency = read.question('Put here the origin currency: ');
    destinyCurrency = read.question('Put here the destiny currency: ');
    cadCurrency(position, originCurrency, destinyCurrency);
    fs.writeFileSync("currencies.json", JSON.stringify(currencies))

function cadTariffs(t){

    let register = [t]
    tariffs.push(register)
    }

let tariff = read.questionFloat('Put here the tariff value: ')
cadTariffs(tariff)
fs.writeFileSync("tariffs.json", JSON.stringify(tariffs))

enterF()
position++
console.clear()
}

function enterF(){
    let enter
    console.log('\nPress ENTER to continue.');
    read.question(enter)
}