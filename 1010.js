let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let arrayLine1 = lines.shift().split(" ");
let arrayLine2 = lines.shift().split(" ");

let item1 = parseFloat(parseInt(arrayLine1[1]) * parseFloat(arrayLine1[2]));
let item2 = parseFloat(parseInt(arrayLine2[1]) * parseFloat(arrayLine2[2]));

let soma = item1 + item2;

console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));