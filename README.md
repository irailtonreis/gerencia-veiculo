# Teste - Full Stack Developer
Desenvolvimento de uma API restful para cadastro, edição, visualização e exclusão de uma base de veículos. Assim como uma interface para consumo desta API.

## Caracteristicas

- Cadastro, Listagem, Edição e Exclusão de veículos;

## Tecnologias
##### Backend
- [Node.js] - Desenvolvimento API rest;
- [MySql] - Banco ulitizado; 
- [Sequelize] - ORM para manipulação de dados do MySql;
##### Frontend
- [React.js] - Construção de componentes para consumo da API; 
- [Axios] - Utilizado para integração com Backend;
- [Componentes] - Utilzando CSS para estilização; 


## Instalação

 Requerido node v12.18.0;
 MySql: 5.7 ou 8.0;
 npm ou yarn; 

Faça o clone para a pasta se sua preferência 

```sh
git clone https://github.com/irailtonreis/gerencia-veiculo.git
cd gerencia-veiculo
```
Instale as dependências do backend
```sh
cd back-end
```
Execute
```sh
npm install ou yarn install 
```
Configure o .env.example renomeando para .env e adicione variáveis de ambiente
```sh
    DB_HOST=
    DB_USER=
    DB_PASS=
    DB_NAME=
    DB_PORT=
```
Após configurar .env execute as migrations
```sh
sequelize db:migrate
```
Para iniciar o servidor execute:
```sh
npm start ou yarn start 
```
Reberará uma mensagem executando: porta:333;

Instale as dependências do Frontend;
```sh
cd front-end
```
Execute 
```sh
npm install ou yarn install 
```
Após instalar dependêcias execute o servidor
```sh
npm start ou yarn start
```
Acesse o navegador na porta localhost:3000


### 1. Visualização 
<img src='/images/01-veiculo.PNG' width='800px'>

### 2. Cadastro
<img src='/images/02-veiculo.PNG' width='800px'>

### 4. Edição 
<img src='/images/03-veiculo.PNG' width='800px'>

### 3. Delete
<img src='/images/04-veiculo.PNG' width='800px'>
