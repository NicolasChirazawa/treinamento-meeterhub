const express = require('express');
const controllerEscritoPor = require('../controllers/escritoPorController');
const router = express.Router();

router.post('/',controllerEscritoPor.criarEscrito);
router.get('/',controllerEscritoPor.obterTodosEscritos);
router.get('/:id',controllerEscritoPor.obterEscritoPorId);
router.put('/:id',controllerEscritoPor.atualizarEscrito);
router.delete('/:id',controllerEscritoPor.excluirEscrito);

module.exports = router;