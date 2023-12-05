const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split("\n")


while (true) {
  const lado = Number(valores.shift());

   if (lado === 0) {
    console.log("Area = "+ lado)
    break;
  }
  const area = lado * lado;
  console.log('Area =', area);
}
