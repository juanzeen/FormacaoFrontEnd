const generateOptions = document.querySelector("#generate-options");
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPassword = document.querySelector("#generated-password");
const openPassGenerator = document.querySelector("#open-generate-password");
const lengthInp = document.querySelector("#lenght");
const lettersInp = document.querySelector("#letters");
const numberInp = document.querySelector("#numbers");
const symbolsInp = document.querySelector("#symbols");
const copyPassbtn = document.querySelector("#copy-pass");

// functions
const getLetterLowerCase = () => {
  //fromCharCode é um método da string que retorna um caracter com base na ASCII
  //math.floor arredonda
  //multiplica por 26 pq temos 26 letras
  //soma com 97 porque é onde começa as letrar minusculas
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  //soma 65 porque é onde começa as maiusculas
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  //multiplica por 10 pra ter apenas numeros ate 9
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  //temos um numero quebrado no random, multiplica pela quantidade de simbolos
  const symbols = "(){}=<>,.;:/@#$!%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const createPass = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let pass = "";
  const passh4 = generatedPassword.querySelector("h4")
  passh4.style.color = "#333"

  const passLength = lengthInp.value;

  const genArray = [];

  if (lettersInp.checked) genArray.push(getLetterLowerCase, getLetterUpperCase);

  if (numberInp.checked) genArray.push(getNumber);

  if (symbolsInp.checked) genArray.push(getSymbol);

  if (genArray.length === 0 || lengthInp.value <=0) {
    generatedPassword.style.display = "block";
    passh4.innerText = "Impossível gerar senha!";
    passh4.style.color = "#FF0000"
    return;

  }
  

  for (i = 0; i < passLength; i = i + genArray.length) {
    genArray.forEach(() => {
      //randomValue recebe o nome de alguma das funções e por conta do parentese elas
      //são executadas sozinhas
      const randomValue =
        genArray[Math.floor(Math.random() * genArray.length)]();
      pass += randomValue;
    });
  }
  pass = pass.slice(0, passLength);

  generatedPassword.style.display = "block";
  passh4.innerText = pass;
};

generatePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createPass(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

openPassGenerator.addEventListener("click", () => {
  generateOptions.classList.toggle("hide");
});

copyPassbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const pass = generatedPassword.querySelector("h4").innerText;

//  usaremos o navigator para o usarios fazer um ctrl c a partir do click
// o navigator é baseado em promises, por isso usamos o then
navigator.clipboard.writeText(pass).then(()=>{
  copyPassbtn.innerText = "Senha copiada!"

  setTimeout(() =>{
    copyPassbtn.innerText = "Copiar";
  }, 1000)
})
})

lengthInp.addEventListener("submit", (e) => {
  e.preventDefault();
  createPass(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
  console.log("submit")
});
