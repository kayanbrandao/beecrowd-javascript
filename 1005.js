let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

console.log("MEDIA = " + MEDIA.toFixed(5));