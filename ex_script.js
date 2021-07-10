//FizzBuzz

/*
    Divisível por 3 => 'Fizz';
    Divisível por 5 => 'Buzz';
    Divisível por 3 e por 5 => 'FizzBuzz';
    Se não for um número => 'Não é um número;
    Se não for divisível nem por 3 e nem por 5 => Entrada
*/

let resultado = fizzBuzz(15);
console.log(resultado)

function fizzBuzz(entrada){
    if(typeof entrada !=='number')
        return 'Não é um número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}

//reverse a string

let newStr = '';

function reverseAString(str){
    for (let i=str.length - 1; i--);
    newStr += str[1]
    console.log(newStr)

}
let resultado = reverseAString('Oi jacaré')

let resultado = reverseAString
