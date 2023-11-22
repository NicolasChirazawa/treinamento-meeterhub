const express = require('express');
const controllerArmazena = require('../controllers/armazenaController');
const router = express.Router();

router.post('/',controllerArmazena.criarArmazena);
router.get('/',controllerArmazena.obterTodosArmazena);
router.get('/:id',controllerArmazena.obterArmazenaPorId);
router.put('/:id',controllerArmazena.atualizarArmazena);
router.delete('/:id',controllerArmazena.excluirArmazena);

module.exports = router;