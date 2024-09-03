// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e 
// o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e
// retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// digite seu numero abaixo
const numero = 13;

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < (n-1); i++) {
    c = a + b;
    a = b;
    b = c;
    if(a === n || b === n || c === n) {
      return `o número ${n} pertence a sequência de Fibonacci`;
    }
  }
  return `o número ${n} não pertence a sequência de Fibonacci`; 
}


console.log(fibonacci(numero));