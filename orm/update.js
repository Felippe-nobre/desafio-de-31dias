const Usuario = require('./usuario');

async function atualizarUsuario() {
  try {
    await Usuario.update(
      
      { telefone: '987654321' },
      { where: { nome: 'Danilo Soares'} }
    );
    console.log('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
}

atualizarUsuario();