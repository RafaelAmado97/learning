/* var n = 1;
var t = "1";

if(n == t){
    console.log("SIM", n, "é igual a", t);

} else {
    console.log("NÃO", n, "é diferente de", t);
}
 */

//concatenar

/* var t1= "Olá, como vai?" ;
var t2= "Tudo bem?" ;

var textoJunto = t1+ t2;

console.log(textoJunto); */

var nome = "Rafael" ;
var idade = 25;
var bemVindoTemplate ="Olá, como vai %nomeDaPessoaAqui%! Parabéns pelos seus %idadeDaPessoaAqui% anos!";

var bemVindo = bemVindoTemplate.split("%nomeDaPessoaAqui%").join(nome);
bemVindo = bemVindo.split("%idadeDaPessoaAqui%").join(idade);
console.log(bemVindo);

//tornar tudo maiusculo
console.log( bemVindo.toUpperCase());
//tornar tudo minúsculo
console.log ( bemVindo.toLowerCase());