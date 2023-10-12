/**
 * O que são Type union?
 * 
 * É uma forma de declaração de um objeto que recebe mais de um tipo.
 * Nas abordagens abaixo vemos uma lista definida por inferencia e outra 
 * por anotação de tipo que recebem seus valores respectivos.
 */
let cursos = ['Typescript', 'ReactJs', 'vueJS', 'NodeJS'];
cursos.push('NestJS')
console.log(cursos);

let listaDeCompras: string[] = [];
listaDeCompras.push('banana', 'maça', 'abacate')
console.log(listaDeCompras);

/**
 * Utilizando o union types podemos atribuir tipos diferentes em uma mesma 
 * variável. No caso abaixo temos a criação de uma lista de valores que posteriormente
 * recebe um dado do tipo string e com isso temos um erro de tipo por inferencia.
 */
let valores = [10, 150, 200];
//Ex: valores.push('NextJS'); /** Argument of type 'string' is not assignable to parameter of type 'number'. */

/** 
 * Para o exemplo a seguir utilizamos uma abordagem de type union para um array habilitando de forma 
 * que ele receba valores de texto e numéros.
 */
let novoValor: (string | number)[] = [10, 150, 200];
novoValor.push('Joãozinho')
console.log(novoValor);

/** Podemos tambem utilizar essa abordagem para variaveis simples cujo seu valor será 'dinamico' 
 * conforme no exemplo posterior. 
 */
let myName = "Paulo";
let myAge = 32;

let newData: string | number;
newData = myAge;
console.log(typeof newData)
newData = myName;
console.log(typeof newData)



