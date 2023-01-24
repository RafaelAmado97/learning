var produtos = new Map();
produtos.set("1", {nome:"Panela", preco: 99.99});
produtos.set("2", {nome:"Colchão", preco: 299.99});
produtos.set("3", {nome:"USB", preco: 9.99});

var carrinhoDeCompras = new Map();

function addNoCarrinho ( sku ){
    var produto = produtos.get ( sku ) ;
    if ( produto == null){
        return;
    }
    if(carrinhoDeCompras.has(sku)){
        var item = carrinhoDeCompras.get(sku) ;
        item.quantidade++
        return;
    }
    var itemDeCarrinho = {
        quantidade: 1,
        sku: sku,
        nome: produto.nome,
        preco: produto.preco
    };
    carrinhoDeCompras.set (sku, itemDeCarrinho);
}

function mostrarItem( item ){
    console.log(+item.quantidade+"              |     "+item.nome+"     |    "+item.preco);
}

function listaCarrinho(lista){
    console.log("============= CARRINHO DE COMPRAS ==============")
    console.log("QUANTIDADE     |      NOME      |    PREÇO    |")
    for( var i = 0; i < lista.length; i++){
        mostrarItem(lista[i]);
    }
}

addNoCarrinho( "1");
addNoCarrinho( "2");
addNoCarrinho( "2");
listaCarrinho( Array.from (carrinhoDeCompras.values() ))