const ModeloDeposito = require('./model.js');

class controladorDeposito{
    async criarDeposito( req, res ){
        const deposito = req.body;
        try{
            const idDeposito = await ModeloDeposito.criarDeposito(deposito);
            res.status(201).json({ id: idDeposito});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar deposito'});
        }
    }

    async obterTodosDepositos( req, res ){
        try{
            const deposito = await ModeloDeposito.obterTodosDepositos();
            res.status(200).json(deposito);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os depositos'});
        }
    }

    async obterDepositoPorId( req, res ){
        const id_codigo = req.params.id;
        //console.log(id);
        try{
            const deposito = await ModeloDepositoo.obterDepositoPorId(id_codigo);
          //  console.log(cliente);
            if( deposito ){
                res.status(200).json(deposito);
            } else {
                res.status(404).json({erro: 'Deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o deposito'});
        }
    }

    async atualizarDeposito( req, res ){
        const id_codigo = req.params.id;
        const deposito = req.body; 
        try{
            const resultado = await ModeloDeposito.atualizerDeposito(id_codigo, deposito);
            if( resultado ){
                res.status(200).json({msg: 'Deposito atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar deposito'});
        }
    }
    
    async excluirDeposito ( req, res ){
        const id_codigo = req.params.id;
        try{
            const resultado = await ModeloDeposito.excluirDeposito(id_codigo);
            if( resultado ){
                res.status(200).json({msg: 'Deposito excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Deposito não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir deposito'});
        }
    }
}

module.exports = new controladorDeposito();