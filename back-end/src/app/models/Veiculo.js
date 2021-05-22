
module.exports = (sequelize, DataTypes) => {
    const Veiculo = sequelize.define('Veiculo', {
      veiculo: DataTypes.STRING,
      marca: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      descricao: DataTypes.TEXT,
      vendido: DataTypes.BOOLEAN,
    });
  
    return Veiculo;
  };