let aux = 0
const t = 3
const v = []
for (let x = 0; x < 1000; x++) {
    v[x] = aux
    aux++
    if (aux >= t) {
        aux = 0
    }
}

for (let x = 0; x < 1000;x++) {
    console.log(`N[${v}]${t}`)
}