const express = require('express');
const controllerLivro = require('../controllers/livroController');
const router = express.Router();

router.post('/',controllerLivro.criarLivro);
router.get('/',controllerLivro.obterTodosLivros);
router.get('/:id',controllerLivro.obterLivroPorId);
router.put('/:id',controllerLivro.atualizarLivro);
router.delete('/:id',controllerLivro.excluirLivro);

module.exports = router;