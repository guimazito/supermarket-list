var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=preco_produto]');
    console.log('cadastrar');
    
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*
    <div class="lista-produto-single">
        <h3>RedBull</h3>
        <h3 class="preco-produto"><span>R$20,00</span></h3>
    </div><!-- /.lista-produto-single -->
    */

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="preco-produto"><span>R$`+val.valor+`</span></h3>
        </div><!-- /.lista-produto-single -->
        `;
    });

    soma = soma.toFixed(2);
    console.log(soma);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$' + soma;
    
});


document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    console.log('limpar');
    items = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0";
});