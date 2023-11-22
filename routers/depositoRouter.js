const express = require('express');
const controllerDeposito = require('../controllers/depositoController');
const router = express.Router();

router.post('/',controllerDeposito.criarDeposito);
router.get('/',controllerDeposito.obterTodosDepositos);
router.get('/:id',controllerDeposito.obterDepositoPorId);
router.put('/:id',controllerDeposito.atualizarDeposito);
router.delete('/:id',controllerDeposito.excluirDeposito);

module.exports = router;