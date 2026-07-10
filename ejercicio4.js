function Libro (nombre, autor, paginas, genero){
    this.nombre = nombre;
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
    this.prestado = false;
    this.prestar = function (){
        if (this.prestado){
            console.log(`El libro "${this.nombre}" esta prestado`);
        }else{
            this.prestado = true;
            console.log(`El libro "${this.nombre}" se le presto`);
        }
    };
    this.devolver = function(){
if (this.prestado){
    this.prestado = false;
            console.log(`El libro "${this.nombre}" se devolvio`);
        }else{
            console.log(`El libro "${this.nombre}" esta disponible`);
        }    };
} 
let libro1 = new Libro("El extranjero", "Albert Camus", 120, "Novela Filosofica");
let libro2 = new Libro("El Arte de la guerra", "Sun Tzu", 130, "Literatura Didactica");
let libro3 = new Libro("Las 48 leyes del poder", "Robert Greene", 580, "Literatura de no ficción");
let libro4 = new Libro("Harry Potter y el legado maldito", "J. K. Rowling", 336, "Fantasia");
libro1.prestar();
libro1.prestar();
libro1.devolver();
libro1.devolver();
