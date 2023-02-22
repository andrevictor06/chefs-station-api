# Chefs Station Api
Api de consulta, cadastro de receitas

## Configuração do Projeto Local:
  1. Instalar o [Node js](https://nodejs.org/en/), caso não tenha. Versão utilizada para desenvolvimento: v16.15.0;
  2. Executar o comando dentro da pasta raiz do projeto, **npm install**, para baixar as bibliotecas utilizadas;
  3. Criar um arquivo, na pasta raiz do projeto, com o nome ".env". O conteudo pode ser copiado do arquivo ".env.example"
  4. Conetando com o banco de dados a partir de  um Gerenciado de banco de dados, como MySQL Workbench, execute o script files/DDL.sql. Será criado o banco de dados e as tabelas.
  5. Ainda conectado ao banco de dados, execute o script files/DML.sql. Será adicionado registros de teste na tabela 'receita'.
  
## Executar o projeto:
  1. Executar o comando dentro da pasta raiz do projeto, **node index.js**, será iniciado um servidor na porta 4567, podendo ser acessado no endereço: http://localhost:4567/

## Vericar se o projeto funcionou:
  1. Ao acessar o endereço deverá ser retornado a mensagem: *{"message":"Endpoint não encontrado!","code":502}*

## Conteúdo do arquivo ".env":
    MYSQL_HOST: Endereço do banco de dados. Default: localhost
    MYSQL_USER: Usuario do banco de dados. Default: root
    MYSQL_PASSWORD: Senha do banco de dados. Default: senha padrao MySQL
    MYSQL_DATABASE: Nome do database, onde serão criados as tabelas. Default: chefs_station
