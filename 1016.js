let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let tempo_gasto = parseInt(lines.shift());
let velociade_media = parseInt(lines.shift());
console.log(km * 2 + " minutos");