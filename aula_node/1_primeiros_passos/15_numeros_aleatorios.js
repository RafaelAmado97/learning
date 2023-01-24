
//Math.random() retorna um número randomico entre 0 e 1
//0.1, 0.0000002, 0.03921983, 1
var numeroRandomico = (Math.random() * 6) + 0.5 ;
console.log(numeroRandomico ); 

//simulando randomico para números inteiros.
var numeroRandomicoInteiro = Math.round (numeroRandomico) ;
numeroRandomicoInteiro = Math.min ( numeroRandomicoInteiro, 6);
numeroRandomicoInteiro = Math.max (numeroRandomicoInteiro, 1);

console.log (numeroRandomicoInteiro) ;

