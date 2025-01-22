const { Sequelize } = require('sequelize');

// Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('crud', 'postgres', 'nobre1103', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;