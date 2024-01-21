const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

  const imcTable = document.querySelector("#imc-table");
  const heightInp = document.querySelector("#height");
  const weightInp = document.querySelector("#weight");
  const calcBtn = document.querySelector("#calc-btn");
  const clearBtn = document.querySelector("#clear-btn");
  const imcNumber = document.querySelector("#imc-number span");
  const imcInfo = document.querySelector("#imc-info span")
  const backBtn = document.querySelector("#back-btn");
  const calcContainer = document.querySelector("#calc-container")
  const resultContainer = document.querySelector("#result-container")
  //aqui criamos a tabela de forma dinâmica.
  //poderia ter sido criada por meio de template string, ou manualmente
  // contudo, como temos o array com as informações que precisamos, torna-se
  //mais viável fazermos dessa maneira!
  function createTable(data){
    data.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add("table-data")

        const classification = document.createElement("p");
        classification.innerText = item.classification;

        const info = document.createElement("p");
        info.innerText = item.info;

        const obesity = document.createElement("p");
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    });
  }

function cleanInputs(){
  heightInp.value = "";
  weightInp.value = "";
  imcNumber.classList = "";
  imcInfo.classList = "";

}

function validDigits(txt){
  //aceitamos "textos" de 0 a 9 e vírgulas
  //o g é pra dizer que é global, texto todo
  //creio que isso seja regex
  return txt.replace(/[^0-9,]/g, "")
}

[heightInp, weightInp].forEach((element) => {
  element.addEventListener("input", (e)=> {
    //target value é o valor atual digitado no campo
    const updatedValue = validDigits(e.target.value);
    e.target.value = updatedValue;
  })

});

function calcImc(weight, height){
  //arredonda pra uma casa decimal
  const imc = (weight / (height * height)).toFixed(1);

  return imc
}

function showOrHide(){
  calcContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");

}

  createTable(data);

  calcBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    //convertendo do padrão br para o padrão estadunidense
    const heightNumber = +heightInp.value.replace(",", ".")
    const weightNumber = +weightInp.value.replace(",", ".")

    if(!weightNumber || !heightNumber) return;

    const imc = calcImc(weightNumber, heightNumber);

    let info

    //sria possível fazer com uma sequencia de ifs
    //mas como temos essas informações em uma array, torna-se muito mais viável usar o forEach
    data.forEach((item) => {
      if(imc>=item.min && imc <= item.max){
        info = item.info
      }
    });

    if(!info) return;

    imcNumber.innerText = imc;
    imcInfo.innerText = info;

    switch(info){
      case "Magreza":
        imcNumber.classList.add("low");
        imcInfo.classList.add("low");
        break;

      case "Normal":
        imcNumber.classList.add("good");
        imcInfo.classList.add("good");
        break;

      case "Sobrepeso":
        imcNumber.classList.add("low");
        imcInfo.classList.add("low");
        break;

      case "Obesidade":
        imcNumber.classList.add("medium");
        imcInfo.classList.add("medium");
        break;

      case "Obesidade grave":
        imcNumber.classList.add("high");
        imcInfo.classList.add("high");
        break;
    }

    console.log(imcNumber.classList)
    console.log(info)

    showOrHide();

  })

  clearBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    cleanInputs();
  });

  backBtn.addEventListener("click", (e) =>{
    cleanInputs();
    showOrHide();
  })
