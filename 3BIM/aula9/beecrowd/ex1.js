var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = [];
for (var i = 0; i < 10; i++) {
    X[i] = parseInt(lines.shift());
}

for (var i = 0; i < 10; i++) {
    if (X[i] <= 0) {
        X[i] = 1;
    }
}

for (var i = 0; i < 10; i++) {
    console.log("X[" + i + "] = " + X[i]);
}
