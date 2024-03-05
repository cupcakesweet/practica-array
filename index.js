//array de valores unicos//
const fruta = ["mango", "papaya", "melon"]
const frutas= new Set(fruta)
console.log(frutas.has("mango"))
console.log([...frutas])