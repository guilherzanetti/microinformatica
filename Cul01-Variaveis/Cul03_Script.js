// Declaração de variáveis
console.log("Declaração de variáveis");
// Utilizando palavra-chave
var a = 1;
console.log(a);

// Mudando o tipo da variável
console.log("Mudando o tipo da variável");

a = "nome";
console.log(a);

// Existe a possibilidade de criar variável global em javascript sem uso das palavras-chave de declaração de variável, "var por exemplo".

nome = "Agda"

// Acima temos um exemplo de variável Global de javascript.
// Porém , não é recomendado.

// Forma de criar variável
var $x = 2;
var x = 3;
var _x = 4;

console.log($x);
console.log(x);
console.log(_x);

// Com a palavra-chave "let" não é possível redeclarar a variável
// Variável declarada com "let"

console.log("Redeclarando variável com o let");

var nome2 = "Mari";
var nome2 = "Agda";

// Teste de escopo de declaração de variável
console.log("Teste de escopo");
let k=10;
{

    //Chaves define um novo escopo
    let k=2

}

console.log(y);
