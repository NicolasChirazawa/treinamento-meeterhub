CREATE DATABASE banco_exemplo 
DEFAULT CHARACTER SET utf-8
DEFAULT COLLATE utf8_general_ci;

-- O email ser uma PK é interessante pois não terá vários clientes com o mesmo email, explicitando o significado das próprias restrições da Primary Key--
CREATE TABLE cliente (
    cliente_id INT          NOT NULL auto_increment,
    email      VARCHAR(60)  NOT NULL,
    nome       VARCHAR(40)  NOT NULL,
    endereco   VARCHAR(60)  NOT NULL,
    telefone   VARCHAR(14)  NOT NULL,
    CONSTRAINT cliente_id_PK PRIMARY KEY (cliente),
    CONSTRAINT email_UK UNIQUE KEY (email)
);

-- O carrinho de compras terá uma comunicação 1:N com o cliente, dessa forma, toda vez que o cliente atualizar, o carrinho também atualizará. A comunicação 1:N funciona da seguinte maneira, onde se tem o N, é necessário a chave, pois é nele que terá o 1 --
-- Ou seja, o cliente é 1, o carrinho é N, a chave estará no carrinho, pois somente lá terá um registro de 1 cliente -- 
CREATE TABLE carrinho_compras (
    carrinho_id INT NOT NULL,
    cliente_id  INT NOT NULL,
    CONSTRAINT carrinho_id_PK PRIMARY KEY (carrinho_id),
    CONSTRAINT cliente_id_FK FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);

-- O ISBN é um bom uso de PK pois existe um padrão internacional para sua existência assim não ocorrerá repetições do mesmo, funcionando para ser PK --
CREATE TABLE livro (
    livro_id      INT          NOT NULL  auto_increment,
    editora_id    INT          NOT NULL,
    ISBN          VARCHAR(13)  NOT NULL,
    título        VARCHAR(40)  NOT NULL,
    ano           VARCHAR(4)   NOT NULL,
    preço         DECIMAL(7,2) NOT NULL,
    CONSTRAINT ISBN_UK UNIQUE KEY (livro_id),
    CONSTRAINT livro_id PRIMARY KEY (livro_id),
    CONSTRAINT editora_id_FK FOREIGN KEY (editora_id) REFERENCES editora(editora_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Por meio de uma PK dupla relaciono o carrinho de compras com o livro, além disso é a área mais interessante para conter a quantidade de um relacionamento --
CREATE TABLE contem (
    livro_id             INT UNSIGNED NOT NULL,
    carrinho_compras_id  INT          NOT NULL, 
    quantidade           INT          NOT NULL,
    CONSTRAINT carrinho_compras_livro_PK PRIMARY KEY (carrinho_compras_id, livro_id),
    CONSTRAINT contem_FK1 FOREIGN KEY (livro_id) REFERENCES livro(livro_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT contem_FK2 FOREIGN KEY (carrinho_compras_id) REFERENCES carrinho_compras(carrinho_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Eu não posso usar o nome de um autor como PK, pois pessoas podem ter o mesmo nome --
CREATE TABLE autor (
    autor_id  INT          NOT_NULL auto_increment,
    nome      VARCHAR(40) NOT NULL,
    endereco  VARCHAR(60) NOT NULL,
    URL       TEXT         NOT NULL,
    CONSTRAINT autor_id_PK PRIMARY KEY (autor_id)
);

-- A tabela escrito_por faz um relacionamento 1:N entre livro e autor, já que um livro pode ter mais de um autor --
CREATE TABLE escrito_por (
    autor_id INT  NOT NULL,
    livro_id INT  NOT NULL,
    CONSTRAINT autor_id_livro_id_PK PRIMARY KEY(autor_id, livro_id),
    CONSTRAINT autor_id_FK FOREIGN KEY (autor_id) REFERENCES autor(autor_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT id_livro_FK FOREIGN KEY (livro_id) REFERENCES livro(livro_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Nome nesse caso pode ser uma PK pela existência do © (copyright), é muito improvável que outra utilize do mesmo por problemas legais ou ao mesmo tempo duas editoras menores (não possuem ©) terem o exato mesmo nome --
CREATE TABLE editora (
    editora_id  INT         NOT NULL auto_increment,
    nome        VARCHAR(40) NOT NULL,
    endereco    VARCHAR(60),
    telefone    VARCHAR(14),
    URL         TEXT,
    CONSTRAINT nome_UK UNIQUE KEY (nome),
    CONSTRAINT editora_id_PK PRIMARY KEY (editora_id)
);

CREATE TABLE deposito (
    codigo_id  INT          NOT NULL auto_increment,
    endereco   VARCHAR(60) NOT NULL,
    telefone   VARCHAR(14)  NOT NULL,
    CONSTRAINT codigo_PK PRIMARY KEY (codigo_id)   
);

CREATE TABLE armazena (
    codigo_id  INT  NOT NULL,
    livro_id   INT  NOT NULL,
    numero     INT  NOT NULL,
    CONSTRAINT codigo_id_livro_id_PK PRIMARY KEY (codigo_id, livro_id),
    CONSTRAINT armazena_FK1 FOREIGN KEY (codigo_id) REFERENCES deposito(codigo) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT armazena_FK2 FOREIGN KEY (livro_id) REFERENCES livro(livro_id) ON DELETE CASCADE ON UPDATE CASCADE
);