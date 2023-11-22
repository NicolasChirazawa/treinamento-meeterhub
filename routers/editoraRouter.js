const express = require('express');
const controllerEditora = require('../controllers/editoraController');
const router = express.Router();

router.post('/',controllerEditora.criarEditora);
router.get('/',controllerEditora.obterTodasEditoras);
router.get('/:id',controllerEditora.obterEditoraPorId);
router.put('/:id',controllerEditora.atualizarEditora);
router.delete('/:id',controllerEditora.excluirEditora);

module.exports = router;