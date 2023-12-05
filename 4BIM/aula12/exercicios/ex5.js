var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n');

var cf = lines[0];
var ct = lines[1];

var comp = true;

for (var i = 0; i < cf.length; i++) {
 if (cf[i] == 'A' && ct[i] != 'T') {
    comp = false
 } else if (cf[i] == 'T' && ct[i] != 'A') {
    comp = false
 } else if (cf[i] == 'C' && ct[i] != 'G') {
    comp = false
 } else if (cf[i] == 'G' && ct[i] != 'C') {
    comp = false
 }
}

if (comp) {
 console.log('COMPLEMENTARES');
} else {
 console.log('NAO COMPLEMENTARES');
}