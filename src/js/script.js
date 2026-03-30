//DECLARAÇÕES E VARIÁVEIS
//var,let e const

var nome="Fiap";
console.log(nome);

var nome="Teste";
console.log(nome)

if(true){
    var apelido="Fiapinho";
    console.log(apelido);
}

const taxaJuro=0.05;
console.log(taxaJuro);
//taxaJuros=1.5;

//typeof-Verifica o tipo da variavel
var exemplo="ola-dev-let";
console.log(exemplo);
let exemplo1="ola-dev-let";
console.log(exemplo1)
const exemplo2="ola-de-const";
console.log(exemplo2);

let exemplo3=10;
console.log(exemplo3)

let exemplo4=true;
console.log(exemplo4);

let exemplo5={nome:"teste"}
console.log(exemplo5)

let exemplo6=["Java", "C#", "PDP"];
console.log(typeof exemplo6)

//valor undefined
let exemplo7;
console.log(exemplo7)

//valor vazio
let exemplo8=null;
console.log(exemplo8);

//OPERADORES ARITIMÉTICOS
const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

//OPERADORES LÓGICOS 
console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2 < 10); // E (todas as condições são verdadeiras)
console.log(valor1 < 100 || valor2 > 10);// OU (uma das tem q ser verdadeiras )
console.log(valor1 == valor2);// COMPARAÇÃO
console.log(valor1 === valor2);// VALOR E TIPO (estritamente igual)


//(Metodo)
//{Objeto}
//[Array]

/***************************************************************************************/

//EXERCICIOS

//1)
var p=50;
var v=0.10*p;

var precoFinal = p-v;
console.log(precoFinal);


//2)
let a=20;
let b=10;

let comparar=(a==20 && b>=10);
console.log(comparar);


//3)
var user_login=true;
var user_password=true;

if (user_login==true){
    console.log("Transação Realizada")
}





