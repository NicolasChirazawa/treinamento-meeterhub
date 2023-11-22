const ModeloCliente = require('../models/clienteModel.js');

class ControladorCliente{
    async criarCliente( req, res ){
        const clientes = req.body;
        try{
            const idCliente = await ModeloCliente.criarCliente(clientes);
            res.status(201).json({ id: idCliente});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar um cliente'});
        }
    }

    async obterTodosClientes( req, res ){
        try{
            const clientes = await ModeloCliente.obterTodosClientes();
            res.status(200).json(clientes);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os clientes'});
        }
    }

    async obterClientePorId( req, res ){
        const id_cliente = req.params.id;
        //console.log(id);
        try{
            const cliente = await ModeloCliente.obterClientePorId(id_cliente);
          //  console.log(cliente);
            if( cliente ){
                res.status(200).json(cliente);
            } else {
                res.status(404).json({erro: 'Clientes não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o cliente'});
        }
    }

    async atualizarCliente( req, res ){
        const id_cliente = req.params.id;
        const cliente = req.body; 
        try{
            const resultado = await ModeloCliente.atualizarCliente(id_cliente, cliente);
            if( resultado ){
                res.status(200).json({msg: 'Cliente atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Cliente não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar cliente'});
        }
    }
    
    async excluirCliente( req, res ){
        const id_cliente = req.params.id;
        try{
            const resultado = await ModeloCliente.excluirCliente(id_cliente);
            if( resultado ){
                res.status(200).json({msg: 'Cliente excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Cliente não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir cliente'});
        }
    }
}

module.exports = new ControladorCliente();