const ModeloAutor = require('../models/autorModel');

class ControladorAutor{
    async criarAutor(req, res){
        const autor = req.body;
        try{
            const idAutor = await ModeloAutor.criarAutor(autor);
            res.status(201).json({ id: idAutor });
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao criar o autor'});
        }
    }

    async obterTodosAutores (req, res) {
        try {
            const autor = await ModeloAutor.obterTodosAutores();
            res.status(200).json(autor);
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao selecionar todos os autores' })
        }
    }

    async obterAutorPorId (req, res) {
        const id_autor = req.params.id;
        try {
            const autor = await ModeloAutor.obterAutorPorId(id_autor);
            if( autor ) {
                res.status(200).json(autor);
            } else {
                res.status(404).json( { erro: 'Autor não encontrado'})
            }
        } catch (erro) {
            res.status(500).json( { erro: 'Erro ao buscar autor '} );
        }
    }

    async atualizarAutor (req, res) {
        const id_autor = req.params.id;
        const autor = req.body;
        try{
            const resultado = await ModeloAutor.atualizarAutor(id_autor, autor);
            if (resultado) 
            {
                res.status(200).json( { msg: 'Autor atualizado com sucesso'} );
            } else {
                res.status(404).json( { erro: 'Autor não encontrado'});
            }
        } catch {
            res.status(500).json( { erro: 'Erro ao atualizar autor' } );
        }
    }

    async excluirAutor (req, res) {
        const id_autor = req.params.id;
        try {
            const resultado = await ModeloAutor.excluirCliente(id_autor);
            if (cliente) {
                res.status(200).json( { msg: 'Autor excluído com sucesso'} );
            } else {
                res.status(404).json( { erro: 'Autor não encontrado' } );
            }
        } catch {
            res.status(500).json( { erro: 'Erro ao apagar autor' } );
        }
    }
}

module.exports = new ControladorAutor();