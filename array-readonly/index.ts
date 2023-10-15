/** Abordagem aplicada para type readonly */
let numeros = [10, 30, 40];

// adicionando valores dentro de um array
numeros.push(50); 
numeros.unshift(5);
console.log(numeros);

// removendo valores dentro de um array
numeros.pop();
numeros.shift();
console.log(numeros);

/**
 * Outras formas de declarar arrays, nesse caso tipo number
 * let number: number[];
 * let number: Array<number>;
 * 
 * Caso eu precise utilizar o union types
 * let arrayDeDados = (number|string)[] = [10, 30, 40, 'Paulo', 'João'];
 * 
 */

/**
 * Para declararmos uma estrutura de array como readOnly devemos anota-lo com o type
 * conforme o exemplo abaixo.
 * 
 * O tipo ReadonlyArray<T> é o tipo de uma matriz de valores do generic T, 
 * em que todos os elementos são apenas leitura. Porém é permitido utilizar todos os 
 * métodos de processamento de array normalmente.
 */
let numberos_ro: ReadonlyArray<number> = [10, 30, 40];
/** numberos_ro.push(50); Property 'push' does not exist on type 'readonly number[]'. */