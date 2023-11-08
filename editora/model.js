const mysql = require('mysql2/promise');

class ModeloEditora{
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'',
            database:'bancodadosteste',
        });
    }

    async criarEditora(editora) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO editoras (nome, endereco, telefone, url) VALUES(?, ?, ?, ?)',
                [editora.nome, editora.endereco, editora.telefone, editora.url]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodasEditoras() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM editoras'
            );
            //console.log('Depois da consulta SQL');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterEditoraPorId(id_editora) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM editoras WHERE id_editora = ?', [id_editora]);
            return registros[0];
        } finally {
            //console.log(id);
            connection.release();
        }
    }

    async atualizerEditora(id_editora, editora) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'UPDATE editoras SET nome = ?, endereco = ?, telefone = ?, url = ? WHERE id_editora = ?',
                [editora.nome, editora.endereco, editora.telefone, editora.url, id_editora]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirEditora(id_editora) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM editoras WHERE id_editora = ?',
                [id_editora]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloEditora();