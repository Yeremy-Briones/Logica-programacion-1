const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));

let numeros = [num1, num2, num3];


if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales:", numeros.join(", "));
} else {
    let numerosDesc = [...numeros].sort((a, b) => b - a);
    console.log("Números ordenados de mayor a menor:", numerosDesc.join(", "));

    let numerosAsc = [...numeros].sort((a, b) => a - b);
    console.log("Números ordenados de menor a mayor:", numerosAsc.join(", "));
}
