const mysql = require('mysql2/promise');

class ModeloCliente{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'',
            database:'bancodadosteste',
        });
    }

    async criarCliente(cliente) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO clientes (nome, endereco, telefone) VALUES(?, ?, ?)',
                [cliente.nome, cliente.endereco, cliente.telefone]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosClientes() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM clientes'
            );
            //console.log('Depois da consulta SQL');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterClientePorId(id_cliente) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
            return registros[0];
        } finally {
            //console.log(id);
            connection.release();
        }
    }

    async atualizarCliente(id_cliente, cliente) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'UPDATE clientes SET nome = ?, endereco = ?, telefone = ? WHERE id_cliente = ?',
                [cliente.nome, cliente.endereco, cliente.telefone, id_cliente]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCliente(id_cliente) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM clientes WHERE id_cliente = ?',
                [id_cliente]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloCliente();