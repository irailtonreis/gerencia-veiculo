const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);
console.log("executando: localhost:3333")
app.listen(3333);