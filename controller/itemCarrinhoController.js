const ModeloItemCarrinho = require('../model/itemCarrinhoModel.js');

class controladorItemCarrinho{
    async criarItemCarrinho( req, res ){
        const item_carrinho = req.body;
        try{
            const idItemCarrinho = await ModeloItemCarrinho.criarItemCarrinho(item_carrinho);
            res.status(201).json({ id: idItemCarrinho});
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao criar item carrinho'});
        }
    }

    async obterTodosItemCarrinho( req, res ){
        try{
            const item_carrinho = await ModeloItemCarrinho.obterTodosItemCarrinho();
            res.status(200).json(item_carrinho);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os itens carrinho'});
        }
    }

    async obterItemCarrinhoPorId( req, res ){
        const id_item_carrinho = req.params.id;
        //console.log(id);
        try{
            const item_carrinho = await ModeloItemCarrinho.obterItemCarrinhoPorId(id_item_carrinho);
          //  console.log(cliente);
            if( livro ){
                res.status(200).json(item_carrinho);
            } else {
                res.status(404).json({erro: 'Item carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({erro: 'Erro ao buscar o item carrinho'});
        }
    }

    async atualizarItemCarrinho( req, res ){
        const id_item_carrinho = req.params.id;
        const item_carrinho = req.body; 
        try{
            const resultado = await ModeloItemCarrinho.atualizerItemCarrinho(id_item_carrinho, item_carrinho);
            if( resultado ){
                res.status(200).json({msg: 'Item carrinho atualizado com sucesso'});
            } else {
                res.status(404).json({erro: 'Item carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao atualizar item carrinho'});
        }
    }
    
    async excluirItemCarrinho ( req, res ){
        const id_item_carrinho = req.params.id;
        try{
            const resultado = await ModeloItemCarrinho.excluirItemCarrinho(id_item_carrinho);
            if( resultado ){
                res.status(200).json({msg: 'Item carrinho excluido com sucesso'});
            } else {
                res.status(404).json({erro: 'Item carrinho não encontrado'})
            }
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao excluir item carrinho'});
        }
    }
}

module.exports = new controladorItemCarrinho();