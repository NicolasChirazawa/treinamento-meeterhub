const pool = require('../pool');

class ModeloEscrito {

    async criarEscrito(escrito_por){
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO escrito_por (id_autor, id_livro) VALUES (?, ?)', [escrito_por.id_autor, escrito_por.id_livro,]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosEscrito(){
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM escrito_por'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterEscritoPorId(id_escrito_por) {
        const connection = await pool.getConnection();
        try{
            const [registro] = await connection.query(
                'SELECT * FROM escrito_por WHERE id_escrito_por = ?', [id_escrito_por]
            );
            return registro[0];
        } finally {
            connection.release();
        }
    }

    async atualizarEscrito(id_escrito_por, escrito_por) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE escrito_por SET id_autor=? id_livro=? WHERE id_escrito_por = ?', [escrito_por.id_autor, escrito_por.id_livro, id_escrito_por]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async deletarEscrito(id_escrito_por) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM escrito_por WHERE id_escrito_por = ?',     [id_escrito_por]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloEscrito();