const empresa = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereco: {
    rua: 'Rua Guilherme Gembala',
    numero: 260,
  },
};

const { nome, endereco:{ rua, numero }} = empresa;

console.log(`A empresa ${nome} está localizada em ${rua}, ${numero}`);
