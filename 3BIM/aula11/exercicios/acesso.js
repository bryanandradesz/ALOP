const notas = [[5.0, 10.0, 4.5],
               [3.5,  6.5, 7.0],
               [6.0,  9.0, 9.7],
               [7.3,  6.0, 2.0]];

notas[2][1] = 7.5
// x linha
// y coluna

for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 3; y++) {
       console.log(notas[x][y].toFixed(1))
    }
    console.log("\n")
}