let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let salarioPorHora = parseFloat(lines.shift());

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + (horasTrabalhadas * salarioPorHora).toFixed(2));