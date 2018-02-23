// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar(nombre) {
//     return `Hola ${ nombre }`;
// }

// let saludar = (nombre) => `Hola ${ nombre }`



// console.log(saludar('Fernando'));

// console.log(sumar(10, 20));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};


console.log(deadpool.getNombre());