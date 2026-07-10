function Estudiante (nombre, curso, nota,){
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
if (this.nota >= 3.0) {
        this.aprobado = true;
    } else {
        this.aprobado = false;
    }
this.mostrarResultado = function(){
    if (this.aprobado === true){
    console.log("aprobado :)");
    } else {
        console.log("Reprobo :(");
        
    }
        return `Nombre: ${this.nombre}, \ncurso ${this.curso} \nnota ${this.nota}`;

};
}
let estudiante1 = new Estudiante("Kevin", 10, 5);
let estudiante2 = new Estudiante("Dylan", 11, 4);
let estudiante3 = new Estudiante("Abby", 9, 2.8);
let estudiante4 = new Estudiante("Brayan", 12, 2.5);
let estudiante5 = new Estudiante("Miguel", 8, 2);
console.log(estudiante1.mostrarResultado());
console.log();
console.log(estudiante2.mostrarResultado());
console.log();
console.log(estudiante3.mostrarResultado());
console.log();
console.log(estudiante4.mostrarResultado());
console.log();
console.log(estudiante5.mostrarResultado());
