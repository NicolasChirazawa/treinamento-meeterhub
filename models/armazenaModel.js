const pool = require('../pool');

class ModeloArmazena {

    async criarArmazena(armazena){
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO autores (id_codigo, id_livro, codigo) VALUES (?, ?, ?)', [armazena.id_codigo, armazena.id_livro, armazena.numero]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosArmazenar(){
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

    async obterArmazenaPorId(id_armazena) {
        const connection = await pool.getConnection();
        try{
            const [registro] = await connection.query(
                'SELECT * FROM armazena WHERE id_armazena = ?', [id_armazena]
            );
            return registro[0];
        } finally {
            connection.release();
        }
    }

    async atualizarArmazena(id_armazena, armazena) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE armazena SET id_codigo=? id_livro=? numero=?  WHERE id_autor = ?', [armazena.id_codigo, armazena.id_livro, armazena.numero, id_armazena]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async deletarArmazena(id_armazena) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM armazena WHERE id_armazena = ?',     [id_armazena]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloArmazena();