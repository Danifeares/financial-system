CREATE DATABASE dindin;

CREATE TABLE 
	usuarios (
        id SERIAL PRIMARY KEY,
        nome TEXT VARCHAR(255) NOT NULL,
        email TEXT VARCHAR(255) NOT NULL UNIQUE,
        senha TEXT VARCHAR(300) NOT NULL
  );

CREATE TABLE
	categorias(
 		id SERIAL PRIMARY KEY,
        descricao TEXT VARCHAR(500)
 );
 
 CREATE TABLE
 	transacoes(
 		id SERIAL PRIMARY KEY,
 		descricao TEXT VARCHAR(500),
 		valor INTEGER NOT NULL,
 		data DATE NOT NULL,
 		categoria_id INTEGER REFERENCES categorias(id),
 		usuario_id INTEGER REFERENCES usuarios(id),
 		tipo TEXT VARCHAR(100) NOT NULL
 );

INSERT INTO categorias (descricao) VALUES
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');