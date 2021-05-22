'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('veiculos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    veiculo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    marca: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    ano:{ 
      allowNull: false,
      type: Sequelize.INTEGER, 
    },
    descricao: { 
      allowNull: false,
      type: Sequelize.TEXT, 
    },
    vendido: { 
      allowNull: false,
      type: Sequelize.BOOLEAN, 
    },
   
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('veiculos'),
};
