const express = require('express');
const controllerCliente = require('../controllers/clienteController');
const router = express.Router();

router.post('/',controllerCliente.criarCliente);
router.get('/',controllerCliente.obterTodosClientes);
router.get('/:id',controllerCliente.obterClientePorId);
router.put('/:id',controllerCliente.atualizarCliente);
router.delete('/:id',controllerCliente.excluirCliente);

module.exports = router;