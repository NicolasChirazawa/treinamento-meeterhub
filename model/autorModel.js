const pool = require('../pool');

class ModeloAutor {


    async criarAutor(autor){
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO autores (nome, endereco, url) VALUES (?, ?, ?)', [autor.nome, autor.endereco, autor.url]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAutores(){
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM autores'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAutor(id_autor) {
        const connection = await pool.getConnection();
        try{
            const [registro] = await connection.query(
                'SELECT * FROM autores WHERE id_autor = ?', [id_autor]
            );
            return registro[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAutor(id_autor, autor) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE autores * FROM autores set nome=? endereco=? url=?  WHERE id_autor = ?', [autor.nome, autor.endereco, autor.url, id_autor]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async deletarAutor(id_autor) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM autores WHERE id_autor = ?', [id_autor]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloAutor();