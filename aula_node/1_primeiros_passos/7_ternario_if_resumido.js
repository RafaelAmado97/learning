
var teorAlcoolico = 1;
var texto = "";
if(teorAlcoolico > 0){
    texto ="Não pode dirigir depois de beber.";
} else {
    texto = "Pode dirigir sim.";
}
console.log(texto) ;


// ---------------- TERNÁRIO
// SINTAXE : (verificador de verdade) ? opção se o verificador for true : opção se for false
var text = (teorAlcoolico > 0)?"Não pode dirigir depois de beber.":"Pode dirigir sim.";
console.log(text) ;
