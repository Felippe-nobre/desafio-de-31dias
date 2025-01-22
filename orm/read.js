const Usuario = require('./usuario');
const Sequelize = require('sequelize');

async function listarUsuarios() {
  try {
    const usuariosFiltrados = await Usuario.findAll({
        where: { idade: { [Sequelize.Op.gt]: 30 } },
      });
    console.log(usuariosFiltrados);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
  }
}

listarUsuarios();