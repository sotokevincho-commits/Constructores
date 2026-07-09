function Computador (marca, procesador, ramGB, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;
}
let PC1 = new Computador("ASUS", "Intel i9", 64, 6000000);
let PC2 = new Computador("hp", "Intel i5", 16, 1500000);
let PC3 = new Computador("Lenovo", "Intel i7", 32, 4000000);
console.log(PC1);
console.log(PC2);
console.log(PC3);
