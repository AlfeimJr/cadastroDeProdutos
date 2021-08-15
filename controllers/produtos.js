const produtoModel = require ('../models/produtos')

const produtosController = {
    produto: ((req, res)=>{
        res.render('admin/produtos')
    }),
    adminProduto: ((req, res)=>{
        res.render('admin/cadastroProduto')
    }),
    salvarProduto: ((req, res)=>{
        const {nome, descricao,imagem} = req.body
        produtoModel.cadastroProduto(nome, descricao, imagem)

        console.log(produtoModel.produto)

        res.send('Cadastro concluido')

    }),
}

module.exports = produtosController;