const mysql = require('mysql2/promise');

class ModeloItemCarrinho {
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'',
            database:'bancodadosteste',
        });
    }

    async criarItemCarrinho(item_carrinho) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO item_carrinho (id_carrinho, id_livro, numero) VALUES (?, ?, ?)',
                [item_carrinho.numero]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosItemCarrinho() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM item_carrinho'
            );
            //console.log('Depois da consulta SQL');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterItemCarrinhoPorId(id_item_carrinho) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM item_carrinho WHERE id_item_carrinho = ?', [id_item_carrinho]);
            return registros[0];
        } finally {
            //console.log(id);
            connection.release();
        }
    }

    async atualizerItemCarrinho(id_item_carrinho, item_carrinho) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'UPDATE item_carrinho SET id_carrinho = ?, id_livro = ?, numero = ? WHERE id_item_carrinho = ?',
                [item_carrinho.numero, id_item_carrinho]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirItemCarrinho(id_item_carrinho) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM item_carrinho WHERE id_item_carrinho = ?',
                [id_item_carrinho]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloItemCarrinho();