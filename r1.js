// Importar el módulo 'crypto'
const { randomInt } = require('crypto');

// Función para generar y mostrar 10 números aleatorios
function generarNumerosAleatorios(cantidad) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        // Generar un número aleatorio entre 1 y 100
        const numeroAleatorio = randomInt(1, 101); // El rango es [1, 101)
        numeros.push(numeroAleatorio);
    }
    return numeros;
}

// Generar 10 números aleatorios
const numerosAleatorios = generarNumerosAleatorios(10);

// Mostrar los números en la consola
console.log("Números aleatorios generados:", numerosAleatorios);
