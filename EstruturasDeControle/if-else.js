//#region estruturas de controle(if...else)
let nota = 6.5

if (nota >= 8.5) {
    console.log('Ótimo');
} else if (nota >=6.0) {
    console.log('Bom');
} else {
    console.log('Ruim');   
}


nota =-1
if (nota > 0) {
    console.log('Positivo');
} else {
    console.log('Negativo');
}

//! -> negação
nota =-1
if (!(nota > 0)) { 
    console.log('Negativo');
} else {
    console.log('Positivo');
}
//#endregion