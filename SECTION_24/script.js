const operationForm = document.querySelector("#operation-form");
const numberInput = document.querySelector("#number");
const multInput = document.querySelector("#multiplicator");
const multTable = document.querySelector("#multiplicate-operations");
const multTitle = document.querySelector("#multiplication-title span");


const createTable = (num, multNum)=> {
   multTable.innerHTML = ""

   for(i = 1; i <=multNum ; i++){
    const result = num * i;

    //template strings
    const template = `<div class="row">
                <div class="operation">${num} x ${i} = </div>
                <div class="result">${result} </div>
            </div>`; 

    const parser = new DOMParser();//objeto que transforma o template em HTML

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row");

    multTitle.innerText = num

    multTable.appendChild(row);
   }
}

operationForm.addEventListener("submit", (e)=>{
    e.preventDefault();//evita recarregamento de page
    
    const number = +numberInput.value;//o + é usado para que retorne um numero inteiro
    const multNumber = +multInput.value;

    if(!number || !multNumber)return;//early return caso não tenha um dos numeros
    
    createTable(number, multNumber)
})