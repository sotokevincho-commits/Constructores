function Mascota (nombre, especie, edad, pesoKG){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = pesoKG;
this.presentarse = function() {
    return `Nombre ${this.nombre}, especie ${this.especie} edad ${this.edad} peso ${this.peso} kg`;
};
}
let mascota1 = new Mascota("Toby", "Perro", 11, 17);
let mascota2 = new Mascota("Naranjo", "Gato", 11, 5);
let mascota3 = new Mascota("Rony", "Loro", 4, 0.5);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());
