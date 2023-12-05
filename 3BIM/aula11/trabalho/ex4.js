const prompt = require('prompt-sync')()

const n = Number(prompt("Qual numero: "))
const x = ['Minecraft', 'Fortnite', 'League of Legends', 'Crossfire', 'Free Fire', 'Roblox', 'Call of Duty']
x.sort()

console.log(x[n])