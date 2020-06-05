
function soma(a, b) {
    console.log(a+b);
}

function subtrair(a, b) {
    return (b-a);
}

let x = subtrair(2,3)
console.log(x)

function executar(fn) {
    if(typeof fn === 'function'){
        fn(3,2)
    }
}

executar(soma)

//function declaration

//function expression
const mult = function (a,b) {
    return a * b
}
console.log(mult)

const z = ()=> {
    return 'z'
}
console.log(z)