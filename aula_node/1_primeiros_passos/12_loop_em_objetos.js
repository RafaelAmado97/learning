

const guerreiro = {
    nome    : "Thor",
    forca   : 100,
    hp      : 1000
} ;

const dragao = {
    nome    : "Dragão",
    forca   : 200,
    hp      : 300
} ;

for( var i in guerreiro){
    console.log( guerreiro[i] ) ;
}

var turno = 0;
while (dragao.hp>0 && guerreiro.hp >0){
    //aqui na batalha
    //guerreiro ataca nos multiplos de 10
    console.log("Estamos no turno", turno) ;
    //dragao ataca no impar
    if(turno%2 == 1){
        console.log("É a vez do Guerreiro atacar.")
        guerreiro.hp = guerreiro.hp - dragao.forca;
    }
    if(turno%10 == 0 ){
        console.log("É a vez do Dragão atacar.")
    dragao.hp -= guerreiro.forca;
    }
    turno++;
}

console.log (guerreiro,dragao);