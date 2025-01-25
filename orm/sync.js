const sequelize = require('./database');
const Usuario = require('./usuario');

async function sincronizarBanco() {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco sincronizado com sucesso!');
  } catch (error) {
    console.log('Erro ao sincronizar o banco:', error); 
  }
}
module.exports = { sincronizarBanco }