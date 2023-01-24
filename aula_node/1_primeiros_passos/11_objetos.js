var i = 0;
var nome = "Rafael";
let maca = {
    nome    :"Maça Fuji",
    idade   : 400,
    casca: {
        cor: "Vermelha",
        vitaminas: "B e C"
    }
} ;

console.log(i, nome, maca) ;

//Assim podemos visualizar uma propriedade do nosso objeto.
console.log(maca.nome);
//Também podemos visualizar a propriedade dentro de outra propriedade
console.log(maca.casca.cor);