//Tratar uma requisição do banco de dados. Controle da aplicação ao banco de dados, intermediário entre MODEL e VIEW.

const modeloCliente = require('./model');

class ControladorCliente{
    async criarCliente(req, res){
        const Cliente = req.body;
        try{
            const idCliente = await modeloCliente.criarCliente(cliente);
            req.status(201).json({ id: idCliente });
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao criar um cliente'});
        }
    }

    async obterTodosClientes(req, res){
        try{
            const clientes = await modeloCliente.obterTodosClientes;
            req.status(200).json(clientes);
        } catch (erro){
            res.status(500).json({ erro: 'Erro ao buscar todos clientes'});
        }
    }

    async obterClientePorId(req, res){
        const id = req.params.id;
        try{
            const cliente = await modeloCliente.obterClientePorId(id);
            if( cliente ) {
                req.status(201).json({ id: idCliente });
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado'});
            }
        } catch (erro){
            res.status(500).json({ erro: 'Erro ao buscar clientes'});
        } 
    }

    async atualizarCliente(req, res){
        const id = req.params.id;
        const cliente = req.body;
        try{
            const resultado = await modeloCliente.atualizarCliente(id, cliente);
            if( resultado ) {
                req.status(201).json({ msg: 'Cliente atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado'});
            }
        } catch (erro){
            res.status(500).json({ erro: 'Erro ao ataulizar o cliente'});
        } 
    }

    async excluirCliente(req, res){
        const id = req.params.id;
        try{
            const resultado = await modeloCliente.excluirCliente(id);
            if( resultado ) {
                req.status(201).json({ msg: 'Cliente excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado'});
            }
        } catch (erro){
            res.status(500).json({ erro: 'Erro ao excluir o cliente'});
        } 
    }
}

module.exports = new controllerCliente();