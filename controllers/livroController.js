const ModeloLivro = require('../models/livroModel');

class ControladorLivro{
    async criarLivro( req, res ){
        const livro = req.body;
        try{
            const idLivro = await ModeloLivro.criarLivro(livro);
            res.status(201).json({ id: idLivro});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar livro'});
        }
    }

    async obterTodosLivros( req, res ){
        try{
            const livro = await ModeloLivro.obterTodosLivros();
            res.status(200).json(livro);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os livros'});
        }
    }

    async obterLivroPorId( req, res ){
        const id_livro = req.params.id;
        //console.log(id);
        try{
            const livro = await ModeloLivro.obterLivroPorId(id_livro);
          //  console.log(cliente);
            if( livro ){
                res.status(200).json(livro);
            } else {
                res.status(404).json({erro: 'Livro não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o livro'});
        }
    }

    async atualizarLivro( req, res ){
        const id_livro = req.params.id;
        const livro = req.body; 
        try{
            const resultado = await ModeloLivro.atualizerLivro(id_livro, livro);
            if( resultado ){
                res.status(200).json({msg: 'Livro atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Livro não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar livro'});
        }
    }
    
    async excluirLivro ( req, res ){
        const id_livro = req.params.id;
        try{
            const resultado = await ModeloLivro.excluirLivro(id_livro);
            if( resultado ){
                res.status(200).json({msg: 'Livro excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Livro não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir livro'});
        }
    }
}

module.exports = new ControladorLivro();