const crr = ['!', 'U', 'O', 'T', 'R', 'E', 'C', 'A']

for (let x = 1; x < 4; x++) {
    let aux = crr[x]
    crr[x] = crr[8 - x - 1]
    crr[8 - x - 1] = aux
}

aux = crr[0]
crr[0] = crr[7]
crr[7] = aux
for (x = 0;x < 8; x++) {
    console.log(crr[x])
}