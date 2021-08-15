let listaDeProdutos = [
    {
        nome: 'Site',
        descricao: 'Seu site incrivel',
    },
];

function cadastroProduto(nome, descricao){
    const novoProduto = {
        nome,
        descricao,
    };

    return listaDeProdutos.push(novoProduto);
}


module.exports = {listaDeProdutos, cadastroProduto};