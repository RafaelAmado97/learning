
// Verificando condição de uma forma diferente


var idade = 18;
//variavel que pode ser verdadeira ou falsa, ou seja, true ou false se chama:
//BOLEANA ou em inglês boolean
var maioridadeNoBrasil = (idade >= 18) ;
var maioridadeNosEua = (idade >= 16);

var limiteDeIdadeNoBrasil = (idade < 90) ;
var limteDeIdadeNosEua = (idade < 85);

if(maioridadeNosEua && !maioridadeNoBrasil){
    //aqui ele já pode tirar carta pela idade mínima, mas e a máxima?
    if(limiteDeIdadeNoBrasil && !limteDeIdadeNosEua){
        console.log("Só pode tirar a CNH no Brasil");
    } else if(limiteDeIdadeNoBrasil && limteDeIdadeNosEua){
        console.log("Você só pode tirar CNH nos EUA");}
      else{
         console.log("Você não pode tirar a CNH");}

      }else if(maioridadeNoBrasil && maioridadeNosEua) {
    console.log("Pode tirar carta tanto no Brasil quanto nos EUA")
}  else if(maioridadeNoBrasil){
    console.log("Pode tirar CNH só no Brasil");
}
else {
    console.log("Você  não pode tirar CNH");
}



//próximo exercício. Exemplo de ===
// == verifica se é igual  // string, número e data
// != verifica se é diferente // string, número e data
// <= menor ou igual // número e data
// >= maior ou igual // número e data
// > ou < // número e data



var nome ="Rafael" ;

if( nome === "Rafael"){
    console.log("Existe um nome e é", nome);
}


//CASE SENSITIVE
switch (nome.toLowerCase()){
    case "Rafael":
        //se nome for Rafael, entra aqui
        console.log("Olá Rafael");
        break;
    case "Renato":
        //se nome for Renato, entra aqui
        console.log("Olá Renato");
        break;
    default:
        //entra aqui caso não seja nenhum dos anteriores
        console.log("Olá", nome);
        break;
}