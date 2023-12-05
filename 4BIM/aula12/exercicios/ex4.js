var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

var line = lines[0]
var lr = ""
var cl = []

for (var i = 0; i < line.length; i++) {
    var c = line[i]
    if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
        cl.push(c)
        lr = c + lr
    }
}

if (cl.join('').toLowerCase() === lr.toLowerCase()) {
    console.log("SIM")
} else {
    console.log("NAO")
}