CREATE DATABASE banco_exemplo 
DEFAULT CHARACTER SET utf-8
DEFAULT COLLATE utf8_general_ci;

-- O email ser uma PK é interessante pois não terá vários clientes com o mesmo email, explicitando o significado das próprias restrições da Primary Key--
CREATE TABLE cliente(
    email     VARCHAR(100)  NOT NULL,
    nome      VARCHAR(100)  NOT NULL,
    endereco  VARCHAR(150)  NOT NULL,
    telefone  VARCHAR(20)   NOT NULL,
    CONSTRAINT email_PK PRIMARY KEY (email)
)DEFAULT CHARSET = utf-8;

-- O carrinho de compras ser uma FK faz sentido com email faz sentido pois um cliente não precisa ter um carrinho, criando um caso de obrigatoriedade 0:1 e de cardinalidade 1:1 -- 
CREATE TABLE carrinho_compras(
    id_carrinho INT,
    CONSTRAINT id_carrinho_PK PRIMARY KEY (id_carrinho),
    CONSTRAINT id_carrinho_FK FOREIGN KEY (id_carrinho) REFERENCES cliente(email) ON DELETE CASCADE ON UPDATE CASCADE 
)DEFAULT CHARSET = utf-8;

-- O ISBN é um bom uso de PK pois existe um padrão internacional para sua existência assim não ocorrerá repetições do mesmo, funcionando para ser PK --
CREATE TABLE livro(
    ISBN          VARCHAR(13)  NOT NULL,
    título        VARCHAR(100) NOT NULL,
    ano           VARCHAR(4)   NOT NULL,
    preço         DECIMAL(7,2) NOT NULL,
    editora_nome  VARCHAR(100) NOT NULL,
    CONSTRAINT ISBN_PK PRIMARY KEY (ISBN),
    CONSTRAINT editora_nome_FK FOREIGN KEY (editora_nome) REFERENCES editora(nome) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET = utf-8;

-- Por meio de uma PK dupla relaciono o carrinho de compras com o livro --
CREATE TABLE contem (
    numero               INT UNSIGNED NOT NULL,
    carrinho_compras_id  VARCHAR(100) NOT NULL, 
    CONSTRAINT contem_carrinho_compras_numero_PK PRIMARY KEY (carrinho_compras_id, numero),
    CONSTRAINT contem_FK1 FOREIGN KEY (numero) REFERENCES livro(ISBN) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT contem_FK2 FOREIGN KEY (carrinho_compras_id) REFERENCES carrinho_compras(id_carrinho) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET = utf-8;

-- Eu não posso usar o nome de um autor como PK, pois pessoas podem ter o mesmo nome --
CREATE TABLE autor (
    id_autor  INT          NOT_NULL auto_increment,
    nome      VARCHAR(100) NOT NULL,
    endereco  VARCHAR(150) NOT NULL,
    URL       TEXT         NOT NULL,
    CONSTRAINT id_autor_PK PRIMARY KEY (id_autor),
)DEFAULT CHARSET = utf-8;

-- A tabela escrito_por faz um relacionamento 1:N entre livro e autor, já que um livro pode ter mais de um autor --
CREATE TABLE escrito_por(
    id_autor INT         NOT NULL,
    ISBN     varchar(13) NOT NULL,
    CONSTRAINT id_autor_ISBN_PK PRIMARY KEY(id_autor, ISBN),
    CONSTRAINT id_autor_FK FOREIGN KEY (id_autor) REFERENCES autor(id_autor) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT ISBN_FK FOREIGN KEY (ISBN) REFERENCES livro(ISBN) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET = utf-8;

-- Nome nesse caso pode ser uma PK pela existência do © (copyright), é muito improvável que outra utilize do mesmo por problemas legais ou ao mesmo tempo duas editoras menores (não possuem ©) terem o exato mesmo nome --
CREATE TABLE editora(
    nome      VARCHAR(100) NOT NULL,
    endereco  VARCHAR(150),
    telefone  VARCHAR(20),
    URL       TEXT,
    CONSTRAINT nome_PK PRIMARY KEY (nome),
)DEFAULT CHARSET = utf-8;

CREATE TABLE deposito(
    codigo   INT          NOT NULL auto_increment,
    endereco VARCHAR(150) NOT NULL,
    telefone VARCHAR(20)  NOT NULL,
    CONSTRAINT codigo_PK PRIMARY KEY (codigo)   
)

CREATE TABLE armazena (
    codigo_id  INT          NOT NULL,
    livro_id   VARCHAR(13)  NOT NULL,
    CONSTRAINT codigo_id_livro_id_PK PRIMARY KEY (codigo_id, livro_id),
    CONSTRAINT armazena_FK1 FOREIGN KEY (codigo_id) REFERENCES deposito(codigo) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT armazena_FK2 FOREIGN KEY (livro_id) REFERENCES livro(ISBN) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET = utf-8;