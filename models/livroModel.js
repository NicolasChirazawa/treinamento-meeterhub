const pool = require('../pool');

class ModeloLivro{

    async criarLivro(livro) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO livros (id_editora, isbn, titulo, ano, preco) VALUES(?, ?, ?, ?, ?)',
                [livro.id_editora, livro.isbn, livro.titulo, livro.ano, livro.preco]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosLivros() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM livros'
            );
            //console.log('Depois da consulta SQL');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterLivroPorId(id_livro) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM livros WHERE id_livro = ?', [id_livro]);
            return registros[0];
        } finally {
            //console.log(id);
            connection.release();
        }
    }

    async atualizerLivro(id_livro, livro) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE livros SET id_editora = ?, isbn = ?, titulo = ?, ano = ?, preco = ? WHERE id_livro = ?',
                [livro.id_editora, livro.isbn, livro.titulo, livro.ano, livro.preco, id_livro]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirLivro(id_livro) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM livros WHERE id_livro = ?',
                [id_livro]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloLivro();