/**
 * Ao compilar também é possível setar o watch mode que criar arquivos compilados
 * de forma automatica a cada vez que o arquivo typescript é salvo.
 * Ex: tsc --watch 
 * 
 */

/**
 * O JavaScript por padrão não é fortemente tipado, isso permite que possamos atribuir
 * qualquer valor para uma variável. Já com o Typescript não temos esse problema.
 */
let tsName = "Paulo"; /** valor atribuido por inferencia */
//Ex: tsName = 40; /** Type 'number' is not assignable to type 'string'. */

let lastName; /** ao declarar uma variavel por inferencia sem repassar valor nenhum por padrão ela recebe tipo 'any' */
lastName = "Sergio";

let anotherName: string; /** é importante tipar a declaração evitando falhas de atribuições futuras */
anotherName = "Santos"

/** outros tipos atribuidos por anotação */
const numberData: number = 40;
const isValid: boolean = true;
const itemsList: String[] = ['maçã', 'banana', 'laranja'];