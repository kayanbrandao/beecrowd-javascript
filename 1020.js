let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let dias = parseInt(lines.shift());
let ano = 0;
let mes = 0;

while(dias >= 365){
    ano++;
    dias -= 365;
}

while(dias >= 30){
    mes++;
    dias -= 30;
}

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");