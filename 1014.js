let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

console.log((X / Y).toFixed(3) + " km/l");