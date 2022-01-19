let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let tempo_gasto = parseInt(lines.shift());
let velocidade_media = parseInt(lines.shift());

let media = (tempo_gasto * velocidade_media) / 12;

console.log(media.toFixed(3));