const container = document.querySelector("#container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code-container img")

const generateQr = () =>{
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando QR code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}` ;

    qrCodeImg.addEventListener("load", () =>{
        //classList acessa a classe do nosso elemento, não funciona com ID
        //abaixo tem a maneira de realizar para ID e para class
        //como ID precisamos setar ele novamente, com o class temos o atributo classList
        //o atributo classList deixa mais pratico, até mesmo no CSS, pois podemos apenas adicionar o que falta
        //utilizando IDs precisei colocar novamente todos os atributos do #container no #container-active
        container.classList.add("active");
        container.id="container-active";
        qrCodeBtn.innerText = "QR Code Gerado!"
        console.log(container.id);
    })
}

qrCodeBtn.addEventListener("click", () =>{
    generateQr();
})

qrCodeInput.addEventListener("keydown", (e) =>{
   if(e.code === "Enter"){//pega o código da tecla, e.key também dá certo!
                          //contudoo, há uma diferença entre ambos, mas para esse caso dá certo
    generateQr();
   }
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.id= "container";
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code";
        console.log(container.id)
    }
})