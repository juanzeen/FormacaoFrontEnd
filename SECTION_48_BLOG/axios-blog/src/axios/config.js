import axios from "axios";

//configurando objeto global para ter url base

const blogFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json"
  }
})

export default blogFetch

//essa config permite alterar a url baase de forma fácil
//assim caso a gente altere a API, o app não é tão prejudicado
//além disso, quando formos fazer requisições, podemos passsar somente o endpoint!
