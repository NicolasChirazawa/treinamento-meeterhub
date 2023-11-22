const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
const porta = 3000; 

app.use(bodyParser.json());

//Importar rotas
const armazenaRouter = require('./routers/armazenaRouter');
const autorRouter = require('./routers/autorRouter');
const clienteRouter = require('./routers/clienteRouter');
const depositoRouter = require('./routers/depositoRouter');
const editoraRouter = require('./routers/editoraRouter');
const escritoRouter = require('./routers/escritoPorRouter');
const itemCarrinhoRouter = require('./routers/itemCarrinhoRouter');
const livroRouter = require('./routers/livroRouter');

// rotas sendo usadas
app.use("/armazena", armazenaRouter); // Endpoint armazena
app.use("/autor", autorRouter); // Endpoint autor
app.use("/cliente", clienteRouter); // Endpoint cliente
app.use("/deposito", depositoRouter); // Endpoint deposito
app.use("/editora", editoraRouter); // Endpoint editora
app.use("/escritoPor", escritoRouter); // Endpoint escritoPor
app.use("/itemCarrinho", itemCarrinhoRouter); // Endpoint itemCarrinho
app.use("/livro", livroRouter); // Endpoint livro

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})