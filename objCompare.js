
const obj1 = {

        "0" : {
            "id" : 0,
            "tipo": "Empresa",
            "identidade": "90.906.953/0001-06",
            "nome": "Elisa e Augusto Eletrônica Ltda",
            "nomeContato": "Nome de Contato",
            "endereço": {
                "cep": "81200-640",
                "estado": "Paraná",
                "cidade": "Curitiba",
                "bairro": "Mossunguê",
                "rua": "Rua Myriam de Lourdes Neves",
                "numero": "256",
                "complemento": "Conj 568"
            },
            "nascimento": "",
            "abertura": "20/12/2011",
            "emailEmpresa": "qualidade@elisaeaugustoeletronicaltda.com.br",
            "emailPessoal": "emailpessoal@gmail.com",
            "telEmpresa": "(41) 3910-0870",
            "telPessoal": "(41) 99255-4790",
            "clienteDesde": "12/05/2015"
        },
        "1" : {
            "id" : 1,
            "tipo": "Pessoa",
            "identidade": "152.186.557-40",
            "nome": "Valentina Maya Corte Real",
            "nomeContato": "",
            "nascimento": "22/01/2000",
            "abertura": "",
            "emailEmpresa": "",
            "emailPessoal": "valentina_cortereal@publicarbrasil.com.br",
            "telEmpresa": "",
            "telPessoal": "(31) 99397-3020",
            "endereço": {
                "cep": "32260-240",
                "estado": "Minas Gerais",
                "cidade": "Contagem",
                "bairro": "Inconfidentes",
                "rua": "Rua Cinquenta e Um",
                "numero": "355",
                "complemento": ""
            },
            "clienteDesde": "30/12/2018"
        }

}

const obj2 = {
    
    "0" : {
        "id" : 0,
        "tipo": "Empresa",
        "identidade": "90.906.953/0001-06",
        "nome": "Elisa e Augusto Eletrônica Ltda",
        "nomeContato": "Nome de Contato",
        "nascimento": "",
        "abertura": "20/12/2011",
        "emailEmpresa": "qualidade@elisaeaugustoeletronicaltda.com.br",
        "emailPessoal": "emailpessoal@gmail.com",
        "telEmpresa": "(41) 3910-0870",
        "telPessoal": "(41) 99255-4790",
        "endereço": {
            "cep": "81200-640",
            "estado": "Paraná",
            "cidade": "Curitiba",
            "bairro": "Mossunguê",
            "rua": "Rua Myriam de Lourdes Neves",
            "numero": "256",
            "complemento": "Conj 568"
        },
        "clienteDesde": "12/05/2015"
    },
    "1" : {
        "id" : 1,
        "tipo": "Pessoa",
        "identidade": "152.186.557-40",
        "nome": "Valentina Maya Corte Real",
        "nomeContato": "",
        "nascimento": "22/01/2000",
        "abertura": "",
        "emailEmpresa": "",
        "emailPessoal": "valentina_cortereal@publicarbrasil.com.br",
        "telEmpresa": "",
        "telPessoal": "(31) 99397-3020",
        "endereço": {
            "cep": "32260-240",
            "estado": "Minas Gerais",
            "cidade": "Contagem",
            "bairro": "Inconfidentes",
            "rua": "Rua Cinquenta e Um",
            "numero": "355",
            "complemento": ""
        },
        "clienteDesde": "30/12/2018"
    }
    
}

const obj3 = {
    
    "2" : {
        "id" : 2,
        "tipo": "Empresa",
        "identidade": "45.310.141/0001-49",
        "nome": "Nicolas e Bianca Marcenaria Ltda",
        "nomeContato": "",
        "nascimento": "",
        "abertura": "26/11/2020",
        "emailEmpresa": "fabricacao@nicolasebiancamarcenarialtda.com.br",
        "emailPessoal": "",
        "telEmpresa": "(19) 98927-3287",
        "telPessoal": "",
        "endereço": {
            "cep": "13603-058",
            "estado": "São Paulo",
            "cidade": "Araras",
            "bairro": "Jardim Rosana",
            "rua": "Rua Arnaldo Russo",
            "numero": "519",
            "complemento": ""
        },
        "clienteDesde": "09/10/2011"
    },
    "3" : {
        "id" : 3,
        "tipo": "Pessoa",
        "identidade": "967.405.674-25",
        "nome": "André Pedro Henrique Roberto Martins",
        "nomeContato": "",
        "nascimento": "23/01/2004",
        "abertura": "",
        "emailEmpresa": "",
        "emailPessoal": "andre.pedro.martins@ne.com",
        "telEmpresa": "",
        "telPessoal": "(83) 99237-8569",
        "endereço": {
            "cep": "58084-102",
            "estado": "Paraíba",
            "cidade": "João Pessoa",
            "bairro": "Jardim Veneza",
            "rua": "Rua José Ferreira de Lima",
            "numero": "981",
            "complemento": ""
        },
        "clienteDesde": "05/05/2016"
    },
    "lastID": 3
    
}

const obj4 = {
    
    "2" : {
        "id" : 2,
        "tipo": "Empresa",
        "identidade": "45.310.141/0001-49",
        "nome": "Nicolas e Bianca Marcenaria Ltda",
        "nomeContato": "",
        "nascimento": "",
        "abertura": "26/11/2020",
        "emailEmpresa": "fabricacao@nicolasebiancamarcenarialtda.com.br",
        "emailPessoal": "",
        "telEmpresa": "(19) 98927-3287",
        "telPessoal": "",
        "endereço": {
            "cep": "13603-058",
            "estado": "São Paulo",
            "cidade": "Araras",
            "bairro": "Jardim Rosana",
            "rua": {
                "propriedade1" : 5,
                "propriedade2" : "qualquercoisa",
                "propriedade3" : {
                    "propriedade4" : "algumacoisa",
                    "propriedade5" : "outracoisa",
                    "propriedade6" : {
                        "propriedade7" : 8,
                        "propriedade8" : 9,
                        "propriedade9" : "algumacoisa"
                    },
                    "propriedade10": {
                        "propriedade11" : 616,
                        "propriedade12" : 959,
                        "propriedade13" : "outracoisa"
                    }
                }
            },
            "numero": "519",
            "complemento": ""
        },
        "clienteDesde": "09/10/2011"
    },
    "3" : {
        "id" : 3,
        "tipo": "Pessoa",
        "identidade": "967.405.674-25",
        "nome": "André Pedro Henrique Roberto Martins",
        "nomeContato": "",
        "nascimento": "23/01/2004",
        "abertura": "",
        "emailEmpresa": "",
        "emailPessoal": "andre.pedro.martins@ne.com",
        "telEmpresa": "",
        "telPessoal": "(83) 99237-8569",
        "endereço": {
            "cep": "58084-102",
            "estado": "Paraíba",
            "cidade": "João Pessoa",
            "bairro": "Jardim Veneza",
            "rua": {
                "propriedade1" : 5,
                "propriedade2" : "qualquercoisa",
                "propriedade3" : {
                    "propriedade4" : "algumacoisa",
                    "propriedade5" : "outracoisa",
                    "propriedade6" : {
                        "propriedade7" : 8,
                        "propriedade8" : 9,
                        "propriedade9" : "algumacoisa"
                    },
                    "propriedade10": {
                        "propriedade11" : 616,
                        "propriedade12" : 959,
                        "propriedade13" : "outracoisa"
                    }
                }
            },
            "numero": "981",
            "complemento": ""
        },
        "clienteDesde": "05/05/2016"
    },
    "lastID": 3

}

class objCompare{

    static compare(obj1, obj2 = false, type = 1, order = true){

        if(typeof obj1 !== "object"){
            throw new Error("O primeiro parâmetro deve ser um objeto ou um array!")
        }

        if(obj2 !== false && typeof obj1 !== "object"){
            throw new Error("O segundo parâmetro deve ser false, um objeto, ou um array!")
        }

        var arrayObj1 = Object.entries(obj1)
        var arrayObj2 = Object.entries(obj2)

        var hasObject

        do{

            hasObject = false

            arrayObj1.map((el, index1) => {

                el.map((ul, index2) => {

                    if(typeof ul === "object"){

                        // Ordenador do objeto pelas chaves
                        if(order){

                            var objKeys = Object.keys(ul)
                            var sort = Object.keys(ul).sort()
                        
                            var receptor = new Object()
                        
                            sort.map((li) => {
                        
                                receptor[li] = ul[li]
                        
                            })
                        
                            ul = receptor

                        }

                        arrayObj1[index1][index2] = Object.entries(ul).flat()
                        hasObject = true
                    }

                })

                arrayObj1[index1] = arrayObj1[index1].flat()

            })

        }while(hasObject)

        arrayObj1 = arrayObj1.flat()

        do{

            hasObject = false

            arrayObj2.map((el, index1) => {

                el.map((ul, index2) => {

                    if(typeof ul === "object"){

                        // Ordenador do objeto pelas chaves
                        if(order){

                            var objKeys = Object.keys(ul)
                            var sort = Object.keys(ul).sort()
                        
                            var receptor = new Object()
                        
                            sort.map((li) => {
                        
                                receptor[li] = ul[li]
                        
                            })
                        
                            ul = receptor

                        }

                        arrayObj2[index1][index2] = Object.entries(ul).flat()
                        hasObject = true
                    }

                })

                arrayObj2[index1] = arrayObj2[index1].flat()

            })

        }while(hasObject)

        arrayObj2 = arrayObj2.flat()

        if(arrayObj1.length === arrayObj2.length){

            for(var i=0; i<arrayObj1.length; i++){

                if(type == 1){

                    if(arrayObj1[i] !== arrayObj2[i]){
                        return false
                    }

                }
                else if(type == 2){

                    if(arrayObj1[i] != arrayObj2[i]){
                        return false
                    }

                }
                else{
                    throw new Error("Opção incorreta! O parâmetro type deve ser 1 ou 2!")
                }
                
            }

            return true

        }   
        else{
            return false
        }   

    }

}

console.log( objCompare.compare(obj1, obj2) )

var obj = {
    
    "0" : {
        "id" : 0,
        "tipo": "Empresa",
        "identidade": "90.906.953/0001-06",
        "nome": "Elisa e Augusto Eletrônica Ltda",
        "nomeContato": "Nome de Contato",
        "nascimento": "",
        "abertura": "20/12/2011",
        "emailEmpresa": "qualidade@elisaeaugustoeletronicaltda.com.br",
        "emailPessoal": "emailpessoal@gmail.com",
        "telEmpresa": "(41) 3910-0870",
        "telPessoal": "(41) 99255-4790",
        "endereço": {
            "cep": "81200-640",
            "estado": "Paraná",
            "cidade": "Curitiba",
            "bairro": "Mossunguê",
            "rua": "Rua Myriam de Lourdes Neves",
            "numero": "256",
            "complemento": "Conj 568"
        },
        "clienteDesde": "12/05/2015"
    },
    "1" : {
        "id" : 1,
        0 : 24,
        true: false,
        "tipo": "Pessoa",
        "identidade": "152.186.557-40",
        "nome": "Valentina Maya Corte Real",
        "nomeContato": "",
        "nascimento": "22/01/2000",
        "abertura": "",
        "emailEmpresa": "",
        "emailPessoal": "valentina_cortereal@publicarbrasil.com.br",
        "telEmpresa": "",
        "telPessoal": "(31) 99397-3020",
        "endereço": {
            "cep": "32260-240",
            "estado": "Minas Gerais",
            "cidade": "Contagem",
            "bairro": "Inconfidentes",
            "rua": "Rua Cinquenta e Um",
            "numero": "355",
            "complemento": ""
        },
        "clienteDesde": "30/12/2018"
    }
    
}
var teste = [obj, obj4]
console.log(Array.isArray(teste))
console.log(teste)
    // const objKeys = Object.keys(obj)
    // const sort = Object.keys(obj).sort()

    // var receptor = new Object()

    // sort.map((el) => {

    //     receptor[el] = obj[el]

    // })

    // obj = receptor

    // console.log(typeof obj[1]["0"])




