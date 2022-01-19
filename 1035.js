let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let [A, B, C, D] = lines.shift().split(" ");

A = Number(A);
B = Number(B);
C = Number(C);
D = Number(D);

if((B > C) && (D > A) && ((C + D) > (A + B)) && (C > 0) && (D > 0) && ((A % 2) === 0)){
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}