const express = require('express');
const bodyParser = require('body-parser');
const controladorCliente = require('./controller');

const app = express(); // É o express para realizar comunicação
const porta = 3000;

app.use(bodyParser.json());

app.post('./clientes', controladorCliente.criarCliente);
app.get('./clientes', controladorCliente.obterTodosClientes);
app.get('./clientes:id', controladorCliente.obterClientePorId);
app.put('./clientes:id', controladorCliente.atualizarCliente);
app.delete('./clientes', controladorCliente.excluirCliente);

app.listen( porta, () => {
    console.log(`servidor no ar da porta 3000 ${porta}`);
});

/* 
 Criação da tabela 

 CREATE TABLE cliente (
    id_cliente INT          NOT NULL auto_increment,
    email      VARCHAR(60)  NOT NULL,
    nome       VARCHAR(40)  NOT NULL,
    endereco   VARCHAR(60)  NOT NULL,
    telefone   VARCHAR(14)  NOT NULL,
    CONSTRAINT cliente_id_PK PRIMARY KEY (cliente),
    CONSTRAINT email_UK UNIQUE KEY (email)
)DEFAULT CHARSET = utf-8;

USE TABLE cliente;
*/