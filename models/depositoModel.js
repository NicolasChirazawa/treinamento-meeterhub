const pool = require('../pool');

class ModeloDeposito {

    async criarDeposito(deposito) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO deposito (endereco, telefone) VALUES (?, ?)',
                [deposito.numero]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosDepositos() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM deposito'
            );
            //console.log('Depois da consulta SQL');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterDepositoPorId(id_codigo) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM deposito WHERE id_codigo = ?', [id_codigo]);
            return registros[0];
        } finally {
            //console.log(id);
            connection.release();
        }
    }

    async atualizerDeposito(id_codigo, deposito) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE deposito SET endereco = ?, telefone = ? WHERE id_codigo = ?',
                [deposito.endereco, deposito.telefone, id_codigo]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirDeposito(id_codigo) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM deposito WHERE id_codigo = ?',
                [id_codigo]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloDeposito();