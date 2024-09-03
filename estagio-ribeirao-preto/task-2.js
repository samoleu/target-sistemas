// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
// seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// digite sua string abaixo
const text = 'Aqui tem a letra a';

const countFunction = () => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a' || text[i] === 'A') {
      count++;
    }
  }
  return count;
}
const countOfA = countFunction();
const totalOfA = text.includes('a') || text.includes('A');

console.log(totalOfA + ' ' + countOfA);