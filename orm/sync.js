const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING, // Inclua essa coluna somente se for realmente necessária
    allowNull: true,
  },
}, {
  timestamps: true, // Garante que `createdAt` e `updatedAt` sejam gerados automaticamente
});

module.exports = Usuario;
