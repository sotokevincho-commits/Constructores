const prompt = require('prompt-sync')();
function Vehiculo(marca, modelo, año, precio, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.tipo = tipo; 
    this.encendido = false;
    this.encender = function() {
        if (this.encendido) {
            console.log(`El ${this.marca} ${this.modelo} esta prendido`);
        } else {
            this.encendido = true;
            console.log(`El ${this.marca} ${this.modelo} se prendio`);
        }
    };
    this.apagar = function() {
        if (!this.encendido) {
            console.log(`El ${this.marca} ${this.modelo} ya está apagado`);
        } else {
            this.encendido = false;
            console.log(`El motor del ${this.marca} ${this.modelo} se detuvo`);
        }
    };
    this.mostrarDetalles = function() {
        console.log(`\nInformacion : ${this.marca} ${this.modelo}`);
        console.log(`Año: ${this.año} | Tipo: ${this.tipo} | Precio: $${this.precio}`);
        console.log(`Estado: ${this.encendido ? "Encendido" : "Apagado"}`);
    };
}
let concesionario = [];
console.log("Ingreso de vehiculos");
for (let i = 1; i <= 3; i++) {
    console.log(`\nRegistrando Vehículo`);
    let marca = prompt("Marca: ");
    let modelo = prompt("Modelo: ");
    let año = prompt("Año: ");
    let precio = prompt("Precio: ");
    let tipo = prompt("Tipo (Sedan/Moto/etc): ");
    concesionario.push(new Vehiculo(marca, modelo, año, precio, tipo));
}
console.log("lista de vehiculos ingresados");
concesionario.forEach(auto => {
    auto.mostrarDetalles();
        auto.encender();
        auto.encender();
        auto.apagar();
        auto.apagar();
});