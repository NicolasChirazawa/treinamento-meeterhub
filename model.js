// Responsável pela lógica estrutural das requisições. Caso de Uso

const mysql = require('mysql2/promise'); //tratar erro

class modeloCliente{
    constructor(){
        this.pool = mysql.createPool({ // Conjunto de conexões
        host: '127.0.0.1',
        user: 'user',
        password: '',
        database: 'mcliente',
    });
}

    async criarCliente(cliente){
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.querry(
                'insert into clientes (nome, endereco, cidade) values (?, ?, ?)',
                [cliente.nome, cliente.endereco, cliente.cidade]
            );
            return resultado.insertId;
        } finally {
            connection.release(); // Fechar
        }
    }

    async obterTodosClientes(cliente){
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.querry(
                'select * from clientes',
                [cliente.nome, cliente.endereco, cliente.cidade]
            );
            return registros.insertId;
        } finally {
            connection.release(); // Fechar
        }
    }

    async obterClientePorId(id){
        const connection = await this.pool.getConnection();
        try{
            const [registro] = await connection.querry(
                'select * from clientes where id = ?',
                [id]
            );
            return registro[0];
        } finally {
            connection.release(); // Fechar
        }
    }

    async atualizarCliente(id, cliente){
        const connection = await this.pool.getConnection();
        try{
            await connection.querry(
                'update clientes set nome = ?, endereco = ?, cidade = ?) where id = ?',
                [cliente.nome, cliente.endereco, cliente.cidade, id]
            );
            return true;
        } finally {
            connection.release(); // Fechar
        }
    }

    async excluirCliente(id, cliente){
        const connection = await this.pool.getConnection();
        try{
            await connection.querry(
                'delete clientes from where id = ?',
                [id]
            );
            return true;
        } finally {
            connection.release(); // Fechar
        }
    }
}

module.exports = new modelCliente();