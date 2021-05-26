const { Veiculo } = require('../models');

class VeiculoController {
  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll({order: [
        ['id', 'DESC'],
    ],});

      return res.json(veiculos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      return res.json(veiculo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);

      return res.json(veiculo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      await veiculo.update(req.body);

      return res.json({ veiculo });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      await veiculo.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new VeiculoController();