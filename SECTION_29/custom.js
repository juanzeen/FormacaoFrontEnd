const postFetch = axios.create({//funciona como um noco axios
                                //extendemos um axios que responde com novas configyrações
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "application/json",
        Authorization: "MyNewToken"
    }
})