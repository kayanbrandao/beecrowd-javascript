let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ");

[A, B, C] = [parseFloat(A), parseFloat(B), parseFloat(C)];

console.log("TRIANGULO: " + ((A * C) / 2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * C ** 2).toFixed(3));
console.log("TRAPEZIO: " + (((A + B) * C) / 2).toFixed(3));
console.log("QUADRADO: " + (B ** 2).toFixed(3));
console.log("RETANGULO: " + (A * B).toFixed(3));