//quatro bolsos, dois primeiros mais fundos, primeiro bolso = celular, carteira, chave, segundo bolso = cadeado, outrachave, cartao de vista
let calça = {
    "bolso1": {
        "contem": ["carteira", "celular", "chave"],
       " fundo": true
    },
    "bolso2": {
    "contem": ["cadeado","outrachave", "cartaodevisita"],
     "fundo": true
    },
    "bolso3": {
        "contem": [],
        "fundo": false
    },
    "bolso4":{
        "contem": [],
        "fundo": false
}
}
console.log ("Na minha calça temn" + Object.keys(calça) + "No bolso1, contem" + calça.bolso1.contem)