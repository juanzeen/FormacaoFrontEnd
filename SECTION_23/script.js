const btn = document.querySelector("#my-button");

btn.addEventListener("click", () => console.log("Click no btn"));

const btn2 = document.querySelector("#btn");
const btn3 = document.querySelector("#btn2");

function show() {
  console.log("teste");
}

btn2.addEventListener("click", show); //passamos a função sem parentese, se nao executa quando le
btn3.addEventListener("click", () => {
  console.log("removendo o evento do outro botao da esquerda");
  btn2.removeEventListener("click", show);
});

const title = document.querySelector("#my-title");
title.addEventListener("click", (event) => {
  //o event dentro da arrow é o objeto do evento
  console.log(event); //objeto do evento
  console.log(event.srcElement); //elemento fonte do evento, target é mais usado, mesmo resultado
  console.log(event.offsetX); //posição do elemento em x
  console.log(event.pointerType); //
  console.log(event.target); //elemento alvo de forma resumida, como se selecionasse o elemento
});

const btnContainer = document.querySelector("#button-container");
const divButton = document.querySelector("#div-button");

btnContainer.addEventListener("click", () => console.log("evento 1"));
divButton.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("event 2");
});

const link = document.querySelector("#link");

link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link quebrado! não mudou a page!");
});

const keyup = document.addEventListener("keyup", (e) =>
  console.log(`Soltou a tecla ${e.key}`)
);
const keydown = document.addEventListener("keydown", (e) =>
  console.log(`pressionou a tecla ${e.key}`)
);

const mouseEvents = document.querySelector("#mouseEvents");

mouseEvents.addEventListener("mousedown", () =>
  console.log("pressionou botao")
);
mouseEvents.addEventListener("mouseup", () => console.log("soltou botao"));
mouseEvents.addEventListener("dblclick", () =>
  console.log("pressionou botao duas vezes")
);

document.addEventListener("mousemove", (e) => {
  console.log(`Eixo x ${e.x}`);
  console.log(`Eixo y ${e.y}`);
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passou 200px");
  }
});

const input = document.querySelector("#my-input");

input.addEventListener("focus", () => console.log("entrou no input"));
input.addEventListener("blur", () => console.log("saiu do input"));

// window.addEventListener("load", () => console.log("pagina carregou"));
// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault(); //colocamos preventDefault pra evitar o comportamento padrão de sair da página
//     e.returnValue = "dadhsajhkda" //não muda mais nada passar valor aqui, é padrão
// })

const debounce = (f, delay) => {
  //funcao que sera ativada depois de x tempo, tempo que vai levar pra ativar de novo
  let timeout;

  return (...arguments) => {
    if (timeout) {
      //se tiver timeout
      clearTimeout(timeout); //limpa o timeout, encerra ele
    }

    timeout = setTimeout(() => {
      f.apply(arguments); //a função vem com um formato de texto, usamos o apply para que ela seja executada
    }, delay);
  };
};

window.addEventListener(
  "click",
  debounce(() => console.log("executando a cada 400ms"), 400)
);
