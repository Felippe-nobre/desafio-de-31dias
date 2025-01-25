const Usuario = require('./usuario');

async function criarUsuarios( nome, email, idade) {
  try {
    await Usuario.create({nome, email, idade});
    console.log('Usuários criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuários:', error);
  }
}module.exports = criarUsuarios