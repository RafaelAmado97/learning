// Lista é também chamada de Array


var nomes = ["Renato", "Rafael", "José", "João"];


var indexDoSorteado = Math.min (5, Math.floor(Math.random()*4));

console.log("A pessoa do sorteada é:", nomes[indexDoSorteado]);

//============================

var nomeDasCartas = ["A", "2", "3", "4","6","7", "8", "9", "10", "J", "Q", "K"];
var naipes = ["Paus", "Ouro", "Espadas", "Copas"];

var cartas = [] ;
for ( var i = 0; i < nomeDasCartas.length; i++ ){
    //ele vai fazer um loop do nome das cartas, onde i, é o index de cada nome
    var nomeDessaCarta = nomeDasCartas[i];
    //console.log(nomeDessaCarta);
    for(var j = 0; j <naipes.length; j++){
        var nomeDesseNaipe = naipes[j];
        //console.log(nomeDesseNaipe);
        var essaCarta = {
            nome: nomeDessaCarta,
            naipe: nomeDesseNaipe
        }
        cartas.push(essaCarta);
    }
}

console.log("Todas as cartas que eu tenho são:", cartas, "e temos um total de ", cartas.length,"cartas");

console.log("Vou sortear uma dessas cartas. E a carta sorteada é:")

var indexDaSorteada = Math.min(cartas.length -1, Math.floor( Math.random()*cartas.length));
var cartaSorteada = cartas[ indexDaSorteada ];
console.log(cartaSorteada)
console.log("=============== distribuindo cartas de um baralho")

var cartasSorteadas = [];
for( var i = 0; i < nomes.length; i++){
    var indexDaSorteada = Math.min(cartas.length -1, Math.floor( Math.random()*cartas.length));
    while ( cartasSorteadas.indexOf(indexDaSorteada) >= 0) {
        var indexDaSorteada = Math.min(cartas.length -1, Math.floor( Math.random()*cartas.length));
    }
    var cartaSorteada = cartas[ indexDaSorteada ];
    console.log(nomes[i], "está com a carta:", cartaSorteada.nome, cartaSorteada.naipe);
    cartasSorteadas.push( indexDaSorteada);
}

