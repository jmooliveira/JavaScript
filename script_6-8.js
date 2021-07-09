/*

var colors = ["black", "white", "yellow", "green", "blue"];

for (var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for (var i = 1; i <= 10; i++){
    console.log(i);
}

var i=10;
while(i>=1){
    console.log(i)
    i--;
}

do {
    console.log(i);
    i++;
} while (i<10);

//var name = "Jeff";

function sayHello(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
 sayHello("Jeff", "ffeJ");

 function sum(a, b){
     return a + b;
 }
 console.log(sum(34,1));

 //class em OO funciona como struct em C
 class Book{ 
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read(){//metodo de função, dentro da classe nõ necessita chamar function
        return `Estou lendo ${this.title}`;
    }
 }

 // construção dos atributos para as classes
 let book = new Book('BJJ', 'Gracie', 550); //criando um Objeto
 let otherBook = new Book('Uma Breve História do Tempo', 'Stephen Hawking', 200);
 console.log(book);
 console.log(book.read());
 console.log(otherBook.read());
 console.log(otherBook);

class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('BJJ', 'Gracie', 550, 'JiuJitsu');
console.log(itBook);
console.log(itBook.title);

*/

class Personn{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let personn = new Personn('Jeff');
personn.name = 'Jefferson';
console.log(personn._name);
