//#region estruturas de controle(for forEach)

//for-controlando index
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log('')

//for-controlando index
for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log('')


const notas = [6.5, 3.2, 8.1, 9.7, 4.4]
//for-controlando index
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
console.log('')

//for each-sem controle de index
for (const item of notas) {
    console.log(item);
}
console.log('')

//for each-sem controle de index
notas.forEach(nota => console.log(nota))

//#endregion