class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = []
        this.libros = []
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    countMascotas() {
        return `${this.mascotas.length}`
    }
    addMasctota(mascota) {
        this.mascotas.push(mascota)
    }
    addBook(titulo, autorLibro) {
        this.libros.push({ nombre: titulo, autor: autorLibro })
    }
    getBooksName() {
        return this.libros.map(libro => libro.nombre)
    }
}

let sofia = new Usuario('Sofia', 'Cou', [], []
)
sofia.addMasctota('perro')
sofia.addMasctota('gato')
sofia.addBook('Harry Potter', 'JK Rowling')


let lionel = new Usuario('Lionel', 'Messi', [], [])
lionel.addMasctota('perro')
lionel.addMasctota('gato')
lionel.addMasctota('tortuga')
lionel.addMasctota('lagarto')
lionel.addBook('Codigo Da Vinci', 'Dan Brown')

console.log(sofia.getFullName())
console.log(sofia.countMascotas())
console.log(sofia.getBooksName())
console.log(lionel.getFullName())
console.log(lionel.countMascotas())
console.log(lionel.getBooksName())