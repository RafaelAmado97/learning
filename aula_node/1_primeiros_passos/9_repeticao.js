//criando um objeto simples com várias PROPRIEDADES
const alimento = {
    valorCalorico: 0,
    proteinas: 10,
    sodio: 0
};

//WHILE

while (alimento.valorCalorico < 1000 || alimento.sodio < 444 || ++alimento.proteinas < 20){
    ++alimento.valorCalorico;
    alimento.sodio++ ; }
    console.log(alimento);