const express = require('express')
const path = require('path');
const produtosController = require('../controllers/produtos');
const routes = express.Router();


routes.get('/produtos', produtosController.produto)

routes.get("/cadastroProduto", produtosController.adminProduto);
routes.post("/cadastroProduto", produtosController.salvarProduto);

module.exports = routes;