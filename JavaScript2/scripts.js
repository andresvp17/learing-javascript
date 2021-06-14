//PROGRAMACIÓN ORIENTADA A OBJETOS

//class Persona{
//    constructor(nombre, apellido, edad){
//        this.nombre = nombre;
//        this.apellido = apellido;
//        this.edad = edad;
//
//        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.//edad} años.`
//    }
//
//    saludar(){
//        return `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} //años.`
//    }
//}


class Libro{
    constructor(titulo, autor, year, gender){
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
        this.gender = gender;
    }
    getAuthors(){
        return this.autor
    }

    getGender(){
        return this.gender
    }

    bookInfo(){
        return `${this.titulo} es un libro escrito por ${this.autor}, en el año de ${this.year}, y forna parte del género de ${this,this.gender}`
    }
}

let books = [];

while(books.length < 3){
    let titulo = prompt('Introduzca el título')
    let autor = prompt('Introduzca el autor')
    let year = prompt('Introduzca el año')
    let gender = prompt('Introduzca el género')

    if(titulo != '' &&
        autor != '' && 
        !isNaN(year) &&
        year.length == 4 &&
           (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')){
        books.push(new Libro(titulo, autor, year, gender))
    }
}

const ShowAllBooks = () => {
    console.log(books);
}
//ShowAllBooks()

const ShowAuthors = () => {
    let autores = []
    for(const book of books){
        autores.push(book.getAuthors());
    }
    console.log(autores.sort())
}

const ShowGender = () =>{
    const gender = prompt('Introduzca el género buscado')

    for(const book of books){
        if( book.getGender() == gender){
            console.log(book.bookInfo())
        }
    }
}

//ShowAuthors()
ShowGender()