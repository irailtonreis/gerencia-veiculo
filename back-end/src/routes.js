const { Router } = require('express');
const VeiculoController = require('./app/controllers/VeiculoController');

const routes = Router();

routes.get('/veiculos', VeiculoController.index);

routes.get('/veiculos/:id', VeiculoController.show);
console.log("chegou", process.env.DB_HOST)
routes.post('/veiculos', VeiculoController.store);

routes.put('/veiculos/:id', VeiculoController.update);

routes.delete('/veiculos/:id', VeiculoController.destroy);

module.exports = routes;