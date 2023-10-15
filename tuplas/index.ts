/**
 * O que é uma Tupla em typescript?
 * Tupla é um array de tipos definidos, ou seja, é um array que já sabemos o tipo de cada posição.
 */

let pessoaArray: [string, number, boolean] = ['Paulo', 10, true];
console.log(pessoaArray);
console.log(pessoaArray[0], pessoaArray[1]); /** a consulta por indices é feita normalmente */

pessoaArray[2] = false;
console.log(pessoaArray);
/** 
 * Ao utilizar uma tupla com tipos pré-estabelecidos, não é possível adicionar novos valores
 * e nem utilizar valores de tipos diferentes dos definidos nas posições em que foram definidos.
 * let outraPessoaArray: [string, number, boolean] = [30, '20', false]; Type 'number' is not assignable to type 'string'. 
 */

/**
 * Para adicionar um novo elemento em um array que seja uma tupla é necessário seguir a ordem dos tipos definidos.
 * É possível inclusive imprimir os logs desse array normalmente, porém ao acessar seus indices, o typescript irá
 * apontar erro, pois o tipo do indice não é o mesmo definido na tupla, ou seja, só é possível acessar as posições
 * de acordo com a quantidade de tipos definidos na tupla.
 */
pessoaArray.push("Jose", 5, true);
console.log(pessoaArray);
/**console.log(pessoaArray[3]); Tuple type '[string, number, boolean]' of length '3' has no element at index '3'. */

/** Criando uma tupla somente de leitura, essa abordagem inibi qualquer método */
let pessoaArrayReadonly: readonly [string, number, boolean] = ['Paulo', 10, true];
/** pessoaArrayReadonly.push(); Property 'push' does not exist on type 'readonly [string, number, boolean]'. */