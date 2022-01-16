let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let nomeFuncionario = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendasValor = parseFloat(lines.shift());

let total = salarioFixo + (totalVendasValor * (15 / 100));

console.log("TOTAL = R$ " + total.toFixed(2));