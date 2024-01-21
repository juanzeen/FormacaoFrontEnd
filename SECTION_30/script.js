const images = document.querySelectorAll(".image-container img");

//parametros do Intersection
//função de callback e depois o objeto com informações
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        //entry não é exatamente um elemento do dom, por isos usamos o target
        const image = entry.target;
        //se colocarmos somente o image.src.replace sem atribuição no image.src nao vai
        image.src = image.src.replace("w=10", "w=1000");

        observer.unobserve(image);
    })
}, {});

images.forEach((image) =>{
  observer.observe(image)
})