let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let N = parseInt(lines.shift());
let horas = parseInt(N / 3600);
N = N - (horas * 3600);
let minutos = parseInt(N / 60);
let segundos = N - (minutos * 60);
console.log(`${horas}:${minutos}:${segundos}`);