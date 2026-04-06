// //DECLARAÇÕES E VARIÁVEIS
// //var,let e const

// var nome="Fiap";
// console.log(nome);

// var nome="Teste";
// console.log(nome)

// if(true){
//     var apelido="Fiapinho";
//     console.log(apelido);
// }

// const taxaJuro=0.05;
// console.log(taxaJuro);
// //taxaJuros=1.5;

// //typeof-Verifica o tipo da variavel
// var exemplo="ola-dev-let";
// console.log(exemplo);
// let exemplo1="ola-dev-let";
// console.log(exemplo1)
// const exemplo2="ola-de-const";
// console.log(exemplo2);

// let exemplo3=10;
// console.log(exemplo3)

// let exemplo4=true;
// console.log(exemplo4);

// let exemplo5={nome:"teste"}
// console.log(exemplo5)

// let exemplo6=["Java", "C#", "PDP"];
// console.log(typeof exemplo6)

// //valor undefined
// let exemplo7;
// console.log(exemplo7)

// //valor vazio
// let exemplo8=null;
// console.log(exemplo8);

// //OPERADORES ARITIMÉTICOS
// const valor1=10;
// const valor2=20;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// //OPERADORES LÓGICOS 
// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2 < 10); // E (todas as condições são verdadeiras)
// console.log(valor1 < 100 || valor2 > 10);// OU (uma das tem q ser verdadeiras )
// console.log(valor1 == valor2);// COMPARAÇÃO
// console.log(valor1 === valor2);// VALOR E TIPO (estritamente igual)


// //(Metodo)
// //{Objeto}
// //[Array]

// /***************************************************************************************/

// //EXERCICIOS

// //1)
// var p=50;
// var v=0.10*p;

// var precoFinal = p-v;
// console.log(precoFinal);


// //2)
// let a=20;
// let b=10;

// let comparar=(a==20 && b>=10);
// console.log(comparar);


// //3)
// var user_login=true;
// var user_password=true;

// if (user_login==true){
//     console.log("Transação Realizada")
// }


//ESTRUTURA CONDICIONAL
// if

if(true){
    console.log("Verdadeiro")
}

let nome="fiap";

if (nome=="fiap"){
    console.log("Nome Correto")
}

//if/else

if(nome=="Fiap"){
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

//if encadeado/aninhado

let idade=18;

if(idade <= 13){
    console.log("é uma criança")
}else if (idade>13 && idade<=18){
    console.log("é um adolescente")
}else if (idade>18 && idade<50){
    console.log("é um adulto")
}else{
    console.log("é um idoso")
}

//Switch Case

let pratos="salada";

switch(pratos){
    case "macarrão":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("a salada saudavel")
        break;
    case "lasanha":
        console.log("melhor prato")
        break;
    default:
        console.log("nenhuma das opções")
}

//Ternario
/*
?=if
:else
*/ 
let valor=100;
let resultado=valor ==100 ? "Valor Certo": "Valor Errado";
console.log(resultado)

let usuario="dev";
let logado=usuario =="dev"? "Usuario Logado":"Usuario invalido";
console.log(logado)

//ESTRUTURA DE REPETIÇÂO

//O laço de repetição é ultilizado quando sabemos quantas vezes o codigo vai ser executado

for (let i=1; i<=5; i++){
    console.log("valor",i);
}
//Declaração (i=1), Operação(i<5) e Inclemento(i++) 

const linguagens=["Java", "Python", "C#", "php"];

for (let i=0; i<linguagens.length;i++){
    console.log("Linguagens", i, ":", linguagens[i])
}

const tecnologias=["JS", "HTML", "CSS"];
for (let tec of tecnologias){
    console.log("Estudando: ",tec)
}

const carros={marca:"Volks", modelo:"Fusca", ano: 1980};

for (let dados in carros){
    console.log(dados, ":", carros[dados])
}

//While - usamos quando não sabemos a quantidade de vezes 
let numero=1;

while(numero<=10){
    console.log("Contagem",numero);
    numero++;
}

//Declaração de uma variavel
let num;
while(num !== "0"){
    num = prompt ("Digite um numero ou 0 para sair")
    console.log("Você digitou", num)
}
    