let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let N = parseFloat(lines.shift());
let notas = [100, 50, 20, 10, 5, 2];
let qt_nota = 0;
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let qt_moedas = 0;
console.log("NOTAS:");
for(let nota of notas){
    qt_nota = parseInt((N / nota));
    console.log(`${qt_nota} nota(s) de R$ ${nota.toFixed(2)}`);
    N -= qt_nota * nota;
}
console.log("MOEDAS:");
for(let moeda of moedas){
    N = N.toFixed(2);
    qt_moedas = parseInt((N / moeda));
    console.log(`${qt_moedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    N -= qt_moedas * moeda;
}