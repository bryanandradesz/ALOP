var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var M1 = [];
var M2 = [];

var k = 1;
for (var i = 0; i < N; i++) {
    M1[i] = [];
    for (var j = 0; j < N; j++) {
        M1[i][j] = parseInt(lines[k]);
        k++;
    }
}

for (var i = 0; i < N; i++) {
    M2[i] = [];
    for (var j = 0; j < N; j++) {
        M2[i][j] = parseInt(lines[k]);
        k++;
    }
}


var MR = [];

for (var i = 0; i < N; i++) {
    MR[i] = [];
    for (var j = 0; j < N; j++) {
        MR[i][j] = M1[i][j] + M2[i][j];
    }
}

var vazia = true;
for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        if (MR[i][j] !== 0) {
            vazia = false;
            break;
        }
    }
}

if (vazia) {
    console.log("Vazia");
} else {
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            console.log(MR[i][j]);
        }
    }
}
