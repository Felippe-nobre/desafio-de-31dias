const Usuario = require('./usuario');

async function criarUsuarios() {
  try {
    await Usuario.create({ nome: 'Felippe Nobre', email: 'Felippe@email.com', idade: 21 });
    await Usuario.create({ nome: 'Caike Naboa', email: 'Caike@email.com', idade: 21 });
    await Usuario.create({ nome: 'Danilo Soares', email: 'Danilo@email.com', idade: 21 });
    
    console.log('Usuários criados com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuários:', error);
  }
}

criarUsuarios();