function Estudiantes(nombre, pais, imagen, cargo, empresa) {
    this.nombre = nombre;
    this.pais = pais;
    this.imagen = imagen;
    this.cargo = cargo;
    this.empresa = empresa;
}

Estudiantes.prototype.addTestimonio = function(testimonio) {
    this.testimonio = testimonio;
}

let shawn = new Estudiantes("Shawn", "Singapur", "Shawn","Ingeniero de Software", "Amazon");
shawn.addTestimonio("Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.");

let users = [shawn];
console.log(users);