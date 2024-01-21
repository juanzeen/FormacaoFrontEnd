const btn = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
const bluebtn = document.querySelectorAll(".btn")
const main = document.querySelector("#main-content")


btn.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    btn.forEach((buttons) => {
      //usamos o quertSelector pq está no elemento color a classe
      buttons.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    //mudando a classe pra animação de diminuir opacidade
    image.classList.add("changing");

    //mudando a imagem
    image.setAttribute("src", `img/${id}.png`);

    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});

const template = ` <div class="new-box">
<input type="text" name="" id="" placeholder="Name" />
<input type="email" name="" id="" placeholder="E-mail"/>
<input type="password" name="" id="" placeholder="Password" />
<a href="#" class="btnbuy">Fechar!</a>
</div>` 

const parser = new DOMParser();

const htmlTemplate = parser.parseFromString(template, "text/html");//cria um documento inteiro HTML novo

const newBox = htmlTemplate.querySelector(".new-box")


console.log(htmlTemplate);


bluebtn.forEach( (btn) => btn.addEventListener("click", (e) => {
  e.preventDefault();
  main.insertBefore(newBox, image);
}));



if(newBox){
  const btnBuy = newBox.querySelector(".btnbuy");
  const inputs = newBox.querySelectorAll("input")
  btnBuy.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach((input) =>{
      input.value = "";
    })
    main.removeChild(newBox);
  });
}