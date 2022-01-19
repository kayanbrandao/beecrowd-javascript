let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let valor = parseInt(lines.shift());
let notas = [100, 50, 20, 10, 5, 2, 1];
let qt_nota = 0;
console.log(valor);
for(let nota of notas){
    qt_nota = parseInt((valor / nota));
    console.log(`${qt_nota} nota(s) de R$ ${nota},00`);
    valor -= qt_nota * nota;
}