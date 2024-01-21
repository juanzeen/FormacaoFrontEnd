//tem que ser passado antes das requisições no HTML

postFetch.interceptors.request.use( //requsição
    function (config){//função que dá certo, requsição normal
        console.log("Antes da config!");
        return config;
    },
    function(error){//função para quando dá errado
        return Promise.reject(error);
    }
)

postFetch.interceptors.response.use( //resposta
    function (response){//função para quando temos uma resposta normal
        console.log("Antes da resposta!");
        return response;
    },
    function(error){
        return Promise.reject(error);
    }
)