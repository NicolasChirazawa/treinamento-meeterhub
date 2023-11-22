const express = require('express');
const controllerAutor = require('../controllers/autorController');
const router = express.Router();

router.post('/',controllerAutor.criarAutor);
router.get('/',controllerAutor.obterTodosAutores);
router.get('/:id',controllerAutor.obterAutorPorId);
router.put('/:id',controllerAutor.atualizarAutor);
router.delete('/:id',controllerAutor.excluirAutor);

module.exports = router;