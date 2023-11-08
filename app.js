const express = require('express');
const bodyParser = require('body-parser');

const controladorArmazena = require('./armazena/controller.js');
const controladorAutor = require('./autor/controller.js');
const controladorCliente = require('./cliente/controller.js');
const controladorDeposito = require('./deposito/controller.js');
const controladorEditora = require('./editora/controller.js');
const controladorEscrito = require('./escrito_por/controller.js');
const controladorItemCarrinho = require('./item_carrinho/controller.js');
const controladorLivro = require('./livro/controller.js');

const app = express(); 
const porta = 3000; 

app.use(bodyParser.json());

// armazena
app.post('/armazena', controladorArmazena.criarArmazena);
app.get('/armazena', controladorArmazena.obterTodosArmazena);
app.get('/armazenas/:id', controladorArmazena.obterArmazenaPorId);
app.put('/armazena/:id', controladorArmazena.atualizarArmazena);
app.delete('/armazena/:id', controladorArmazena.excluirArmazena);

// autor
app.post('/autores', controladorAutor.criarAutor);
app.get('/autores', controladorAutor.obterTodosAutores);
app.get('/autores/:id', controladorAutor.obterAutorPorId);
app.put('/autores/:id', controladorAutor.atualizarAutor);
app.delete('/autores/:id', controladorAutor.excluirAutor);

// cliente
app.post('/clientes', controladorCliente.criarCliente);
app.get('/clientes', controladorCliente.obterTodosClientes);
app.get('/clientes/:id', controladorCliente.obterClientePorId);
app.put('/clientes/:id', controladorCliente.atualizarCliente);
app.delete('/clientes/:id', controladorCliente.excluirCliente);

// deposito
app.post('/depositos', controladorDeposito.criarDeposito);
app.get('/depositos', controladorDeposito.obterTodosDepositos);
app.get('/depositos/:id', controladorDeposito.obterDepositoPorId);
app.put('/depositos/:id', controladorDeposito.atualizarDeposito);
app.delete('/depositos/:id', controladorDeposito.excluirDeposito);

// editora
app.post('/editoras', controladorEditora.criarEditora);
app.get('/editoras', controladorEditora.obterTodasEditoras);
app.get('/editoras/:id', controladorEditora.obterEditoraPorId);
app.put('/editoras/:id', controladorEditora.atualizarEditora);
app.delete('/editoras/:id', controladorEditora.excluirEditora);

// escritoPor
app.post('/escritoPor', controladorEscrito.criarEscrito);
app.get('/escritoPor', controladorEscrito.obterTodosEscrito);
app.get('/escritoPor/:id', controladorEscrito.obterEscritoPorId);
app.put('/escritoPor/:id', controladorEscrito.atualizarEscrito);
app.delete('/escritoPor/:id', controladorEscrito.excluirEscrito);

// itemCarrinho
app.post('/itemCarrinho', controladorItemCarrinho.criarItemCarrinho);
app.get('/itemCarrinho', controladorItemCarrinho.obterTodosItemCarrinho);
app.get('/itemCarrinho/:id', controladorItemCarrinho.obterItemCarrinhoPorId);
app.put('/itemCarrinho/:id', controladorItemCarrinho.atualizarItemCarrinho);
app.delete('/itemCarrinho/:id', controladorItemCarrinho.excluirItemCarrinho);

// livro
app.post('/livros', controladorLivro.criarLivro);
app.get('/livros', controladorLivro.obterTodosLivros);
app.get('/livros/:id', controladorLivro.obterLivroPorId);
app.put('/livros/:id', controladorLivro.atualizarLivro);
app.delete('/livros/:id', controladorLivro.excluirLivro);

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})