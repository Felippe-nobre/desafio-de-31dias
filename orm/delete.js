const Usuario = require('./usuario');

async function deletarUsuario() {
  try {
    await Usuario.destroy({ where: { id: 3 } });
    await Usuario.destroy({ where: { id: 4 } });
    await Usuario.destroy({ where: { id: 5 } });
    console.log('Usuário deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}

deletarUsuario();