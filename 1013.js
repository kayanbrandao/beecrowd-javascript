let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maiorABC + " eh o maior");