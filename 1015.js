let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let [x1, y1] = lines.shift().split(" ");
let [x2, y2] = lines.shift().split(" ");

[x1, y1] = [parseFloat(x1), parseFloat(y1)];
[x2, y2] = [parseFloat(x2), parseFloat(y2)];

console.log(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)).toFixed(4));