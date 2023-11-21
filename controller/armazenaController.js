const ModeloArmazena = require('../model/armazenaModel');

class ControladorArmazena{
    async criarArmazena(req, res){
        const armazena = req.body;
        try{
            const idArmazena = await ModeloArmazena.criarArmazena(armazena);
            res.status(201).json({ id: idArmazena });
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao criar o autor'});
        }
    }

    async obterTodosArmazena (req, res) {
        try {
            const armazena = await ModeloArmazena.obterTodosArmazena();
            res.status(200).json(armazena);
        } catch(erro) {
            res.status(500).json({ erro: 'Erro ao selecionar todos os armazenar' })
        }
    }

    async obterArmazenaPorId (req, res) {
        const id_armazena = req.params.id;
        try {
            const armazena = await ModeloArmazena.obterArmazenaPorId(id_armazena);
            if( armazena ) {
                res.status(200).json(armazena);
            } else {
                res.status(404).json( { erro: 'Armazenar não encontrado'})
            }
        } catch (erro) {
            res.status(500).json( { erro: 'Erro ao buscar o armazenamento '} );
        }
    }

    async atualizarArmazena (req, res) {
        const id_armazena = req.params.id;
        const armazena = req.body;
        try{
            const resultado = await ModeloArmazena.atualizarArmazena(id_armazena, armazena);
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

    async excluirArmazena (req, res) {
        const id_armazena = req.params.id;
        try {
            const resultado = await ModeloArmazenar.excluirArmazena(id_armazena);
            if (resultado) {
                res.status(200).json( { msg: 'Armanzenamento excluído com sucesso'} );
            } else {
                res.status(404).json( { erro: 'Armazenamento não encontrado' } );
            }
        } catch {
            res.status(500).json( { erro: 'Erro ao apagar armazenamento' } );
        }
    }
}

module.exports = new ControladorArmazena();