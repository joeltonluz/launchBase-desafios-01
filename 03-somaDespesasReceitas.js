const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas, despesas) {
  const totalReceitas = somaNumeros(receitas);
  const totalDespesas = somaNumeros(despesas);

  return totalReceitas - totalDespesas;
};

function somaNumeros(numeros) {
  let total=0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
};

for (let i=0; i < usuarios.length; i++) {
  const saldoTotal = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
  const tipoSaldo = saldoTotal >= 0 ? 'POSITIVO' : 'NEGATIVO';

  console.log(`${usuarios[i].nome}, possui saldo ${tipoSaldo} de ${saldoTotal.toFixed(2)}`);
};