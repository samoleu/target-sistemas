// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
// faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
//    Estes dias devem ser ignorados no cálculo da média;

const billing = require('./faturamento.json');
// example of billing.json
  // {
  //   "1" : {
  //     "billing": 500
  //   },
  //   "2" : {
  //     "billing": 1000
  //   },
  //   "3" : {
  //     "billing": 1500
  //   },
  // }

const daysWithBilling = Object.values(billing).filter(day => day.billing > 0);
let lowerBilling = daysWithBilling[0].billing;
let highestBilling = daysWithBilling[0].billing;
let totalBilling = 0;
for (const day of daysWithBilling) {
  if (day.billing < lowerBilling) {
    lowerBilling = day.billing;
  }
  if (day.billing > highestBilling) {
    highestBilling = day.billing;
  }
  totalBilling += day.billing;
}
const averageBilling = totalBilling / daysWithBilling.length;
const daysAboveAverage = daysWithBilling.filter(day => day.billing > averageBilling).length;

console.log(`Faturamento:
Menor faturamento: ${lowerBilling}
Maior faturamento: ${highestBilling}
Média de faturamento: ${averageBilling.toFixed(2)}
Dias com faturamento acima da média: ${daysAboveAverage}`);

