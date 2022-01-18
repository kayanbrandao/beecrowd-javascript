let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let km = parseInt(lines.shift());

console.log(km * 2 + " minutos");