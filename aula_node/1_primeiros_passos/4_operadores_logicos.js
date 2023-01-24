// Dados da pessoa
var idade = 18;

var nacionalidade = "brasileiro";

var saldoEmConta = 1800;

//variaveis da aplicação
var idadeMinimaParaCNH = 18;
var custoDaCNH = 1000;

if(nacionalidade == "americano"){
    idadeMinimaParaCNH = 16;
}

if(idade >= idadeMinimaParaCNH && saldoEmConta >= custoDaCNH){
    //só entra aqui se o if for verdadeiro
    console.log("Pode tirar a CNH") ;

} else {
    //só entra aqui se if for falso
    console.log("Você não pode tirar a CNH") ;
}

//diferente de
if(nacionalidade != "americano"){
    console.log("Acho que você é brasileiro");
}
