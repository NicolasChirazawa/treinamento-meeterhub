const ModeloEscrito = require('../models/escritoPorModel');

class ControladorEscrito{
    async criarEscrito(req, res){
        const escrito_por = req.body;
        try{
            const idEscrito = await ModeloEscrito.criarEscrito(escrito_por);
            res.status(201).json({ id: idEscrito });
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao criar o autor'});
        }
    }

    async obterTodosEscritos (req, res) {
        try {
            const escrito_por = await ModeloEscrito.obterTodosEscritos();
            res.status(200).json(escrito_por);
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao selecionar todos os escritos' })
        }
    }

    async obterEscritoPorId (req, res) {
        const id_escrito_por = req.params.id;
        try {
            const escrito_por = await ModeloEscrito.obterEscritoPorId(id_escrito_por);
            if( escrito_por ) {
                res.status(200).json(escrito_por);
            } else {
                res.status(404).json( { erro: 'Escrito não encontrado'})
            }
        } catch (erro) {
            res.status(500).json( { erro: 'Erro ao buscar o escrito '} );
        }
    }

    async atualizarEscrito (req, res) {
        const id_armazena = req.params.id;
        const armazena = req.body;
        try{
            const resultado = await ModeloEscrito.atualizarEscrito(id_armazena, armazena);
            if (resultado) 
            {
                res.status(200).json( { msg: 'Armazenamento atualizado com sucesso'} );
            } else {
                res.status(404).json( { erro: 'Armazenamento não encontrado'});
            }
        } catch {
            res.status(500).json( { erro: 'Erro ao atualizar o armazenamento' } );
        }
    }

    async excluirEscrito (req, res) {
        const id_escrito = req.params.id;
        try {
            const resultado = await ModeloEscrito.excluirEscrito(id_escrito);
            if (resultado) {
                res.status(200).json( { msg: 'Escrito excluído com sucesso'} );
            } else {
                res.status(404).json( { erro: 'Escrito não encontrado' } );
            }
        } catch {
            res.status(500).json( { erro: 'Erro ao apagar o escrito' } );
        }
    }
}

module.exports = new ControladorEscrito();