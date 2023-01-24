//verificar a idade boa de reprodução de cães, escolher 2 raças, pesquisar e fazer um comparativo usando ifs else e switch case
// Exercício:

var racaDoCachorro = "Poodle";
var idadeDoCachorro = 5;
var idadeIdeal = 5;


var racaDoCachorro2 = "American Bully";
var idadeDoCachorro2 = 2;
var idadeIdeal2= 7;

//sair com texto no console dizendo se a idade é ideal para reprodução ou não.

if( racaDoCachorro && idadeDoCachorro != idadeIdeal){
    console.log("A raça selecionada é:", racaDoCachorro, "Ele não está na idade ideal para reprodução.");
} else{
    console.log("A raça selecionada é:", racaDoCachorro, "Ele está na idade ideal para reprodução.");
}
if( racaDoCachorro2 && idadeDoCachorro2 != idadeIdeal2){
    console.log("A raça selecionada é:", racaDoCachorro2, "Ele não está na idade ideal para reprodução.");
} else {
    console.log("A raça selecionada é:", racaDoCachorro, "Ele está na idade ideal para reprodução.");
}

switch(idadeDoCachorro){
    case 3:
        console.log("Seu cachorro não está na idade ideal para reprodução, a idade ideal para reprodução é", idadeIdeal, "a idade do seu cachorro é", idadeDoCachorro);
    break;
    
    case 5:
        console.log("Seu cachorro está na idade ideal para reprodução, a idade ideal para reprodução é", idadeIdeal);
}

switch(idadeDoCachorro2){
    case 7:
        console.log("Seu cachorro está na idade ideal para reprodução, a idade ideal para reprodução é", idadeIdeal2);
    break;
    default:
        console.log("Seu cachorro não está na idade ideal para reprodução, a idade ideal para reprodução é", idadeIdeal2);
}