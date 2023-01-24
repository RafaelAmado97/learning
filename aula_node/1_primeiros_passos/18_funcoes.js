


function exemplo( mensagem ){
    console.log("|----------------------|");
    console.log("|"+mensagem);
    console.log("|----------------------|");
}

function somar(a,b){
    return a + b;
}

function volume (largura,altura, profundidade){
    return (largura * altura * profundidade)/1000;
}

function mostraLista(titulo, lista){
    exemplo(titulo);
    for (var i = 0; i < lista.length; i++){
        console.log(lista[i]);
            }
            exemplo("Fim da lista: "+ titulo);
}

var x = 10;
var y = 90;
var resultado = somar(x, y);
exemplo("Vou somar:" +x+"+"+y+ "="+ somar(x,y));

exemplo("O volume de um recipiente é de " +volume(100,100,100)+" litros");

var compras = ["Leite","Banana", "Manga", "CupNoodles", "Alface"];

mostraLista("Minhas compras",compras);

