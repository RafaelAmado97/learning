// Dicionários ou Mapas

var frutasLista = ["uva", "maça", "pera", "tomate", "morango"];
var frutas = new Map() ;

frutas.set("chave",["valor"]);

frutas.set("vermelhas",[ "maçã", "tomate", "morango"] );

frutas.set("roxas", ["uva"]) ;
frutas.set("amarelas", ["banana", "pera"]);

frutas.set(99, "noventa e nove");

console.log(frutas)
console.log( frutas.get("vermelhas"));


var cartas = new Map() ;
var objAPaus = {nome:"A", naipe:"Paus"};
cartas.set("as de paus", objAPaus);
cartas.set("As de paus", objAPaus);
cartas.set("Apaus", objAPaus);

var nomeDaCarta = "As de paus";
var objetoDaCarta = cartas.get(nomeDaCarta);

console.log(objetoDaCarta)

