const nome = 'Silvana';
const sexo = 'M';
const idade = 48;
const contribuicao = 23;

const idadeContribuicao = idade + contribuicao;
const podeAposentar = ((sexo==='M' && idadeContribuicao>=95) || (sexo==='F' && idadeContribuicao>=85));

if (podeAposentar) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você ainda não pode se aposentar!`);
};