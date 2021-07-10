var myName = "Jefferson"; //string

let language = "JavaScaript";

const pattern = "ECMAScript";

console.log("Hello World!");
console.log(myName);

{
    var age = 35; //number
    let height = 1.78; //float
    console.log(height);
}

console.log(age);
//console.log(height); //erro, let tem escopo local

null
undefined

var isStudent = false //boolean

//objeto, array, function

var person = { //declaração de um objeto, "struct em c"
    "name": "Jeff",
    "age": 35
}

var students = ["GRU", "zeroOnze", "SP"]

function soma(){
    return a + b;
}

//operador typeof
console.log(typeof 35); 
console.log(typeof isStudent);
console.log(typeof height);
console.log(typeof myName);

var object = null;
console.log(typeof object);

function sum(){
    return 6 + 5;
}

console.log(typeof sum);

//operadores aritméticos
//soma
var sumTwoNumbers = 1+3;
console.log(sumTwoNumbers);
//subtracao
var subTwoNumbers = 3-1;
console.log(subTwoNumbers);
//multiplicacao
var multTwoNumbers = 2*3;
console.log(multTwoNumbers);
//divisao
var divTwoNumbers = 3/2;
console.log(divTwoNumbers);
//modulo
var modTwoNumbers = 3%2;
console.log(modTwoNumbers);

var num = 1;
console.log(++num);
console.log(num++);
console.log(num);

console.log(--num);
console.log(num--);
console.log(num);

//atribuição
//+=, -=, *=, /+, %=

/*
operadores de comparação

== comparar valores
=== comparar tipos
!=
<> e <= =>
*/

/*
operadores lógicos

e &&
ou ||
negação !
*/


//condicionais
/*
if, else, else if
*/

var mes = "Janeiro";

switch(mes){
    case "Fevereiro":
        console.log("mes 2");
        break;

    case "Março":
        console.log("mes 3");
        break;

    case "Janeiro":
        console.log("mes 1");
        break;

    default:
        console.log("Nenhum caso foi atendido");
    }
