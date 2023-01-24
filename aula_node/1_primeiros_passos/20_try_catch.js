

function dividir(a, b){
    if(b==0){
        //é um erro enviar o zero como divisor
        throw new Error("Não é possível dividir por zero.")
    }
    if (isNaN(b)){
        throw new Error ("Divisão por letra?")
    }
    return a/b;
}



while(true){
    try{
        console.log(dividir(1,0));
    } catch(e){
        console.log(e);
    } finally{
        console.log("chegou aqui")
    }

}