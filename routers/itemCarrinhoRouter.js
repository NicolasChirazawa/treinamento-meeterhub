const express = require('express');
const controllerCarrinhoItem = require('../controllers/itemCarrinhoController');
const router = express.Router();

router.post('/',controllerCarrinhoItem.criarItemCarrinho);
router.get('/',controllerCarrinhoItem.obterTodosItemCarrinho);
router.get('/:id',controllerCarrinhoItem.obterItemCarrinhoPorId);
router.put('/:id',controllerCarrinhoItem.atualizarItemCarrinho);
router.delete('/:id',controllerCarrinhoItem.excluirItemCarrinho);

module.exports = router;