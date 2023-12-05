const varGlobal = 10

const escopo = () => {
    const varLocal = 20
    console.log(varGlobal)
    console.log(varLocal)
}

escopo()
console.log(varGlobal)
