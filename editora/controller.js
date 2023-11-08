const ModeloEditora = require('./model.js');

class ControladorEditora{
    async criarEditora( req, res ){
        const editora = req.body;
        try{
            const idEditora = await ModeloEditora.criarEditora(editora);
            res.status(201).json({ id: idEditora});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar uma editora'});
        }
    }

    async obterTodasEditoras( req, res ){
        try{
            const editora = await ModeloEditora.obterTodasEditoras();
            res.status(200).json(editora);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todas editoras'});
        }
    }

    async obterEditoraPorId( req, res ){
        const id_editora = req.params.id;
        //console.log(id);
        try{
            const editora = await ModeloEditora.obterEditoraPorId(id_editora);
          //  console.log(cliente);
            if( editora ){
                res.status(200).json(editora);
            } else {
                res.status(404).json({erro: 'Editora não encontrada'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar a editora'});
        }
    }

    async atualizarEditora( req, res ){
        const id_editora = req.params.id;
        const editora = req.body; 
        try{
            const resultado = await ModeloEditora.atualizarEditora(id_editora, editora);
            if( resultado ){
                res.status(200).json({msg: 'Editora atualizada com sucesso'});
            } else {
                res.status(404).json({erro: 'Editora não encontrada'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar editora'});
        }
    }
    
    async excluirEditora ( req, res ){
        const id_editora = req.params.id;
        try{
            const resultado = await ModeloEditora.excluirEditora(id_editora);
            if( resultado ){
                res.status(200).json({msg: 'Editora excluida com sucesso'});
            } else {
                res.status(404).json({erro: 'Editora não encontrada'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir editora'});
        }
    }
}

module.exports = new ControladorEditora();