/**
 * O que é Typescript?
 * 
 * TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é 
 * uma extensão do JavaScript, adicionando tipagem estática opcional e recursos 
 * de orientação a objetos. Ela ajuda os desenvolvedores a detectar erros mais cedo, 
 * melhorar a manutenção do código e facilitar o desenvolvimento de aplicativos 
 * JavaScript mais robustos e escaláveis.
 * 
 * Inicialmente entendemos que arquivos Typescript sçao utilizados apenas
 * criação e organização de códigos, por tanto ele não é utilizado como 
 * código fonte na execução de aplicações, ou seja o TS não é interpretado. 
 * Para isso é preciso realizar um processo chamado compilação, que é transformar 
 * código Typescript em código Javascript que então será interpretado.
 */

/**
 * ==================================================================================
 * Maneiras de compilar:
 * 
 * É possível realizar a execução de um código a partir de um arquivo .ts com a 
 * instrução do node, ex: "node index.ts". Porém como sabemos que esse não será o resultado
 * final é preciso realizar uma etapa de compilação com o comando ex: "tsc index.ts", isso 
 * fará que seja gerado um arquivo .js em uma versão padrão do EcmaScript o qual poderá ser
 * executado e intepretado.
 * 
 * Por padrão o compilador do TS entrega um código na versão ES3 pra setar a compilação em uma 
 * versão específica utrilizamos o comando ex: "tsc index.ts --target 'ES2016'"
 */
const fisrtName = "Paulo";
const lastName = "Sergio";

console.log(fisrtName);
console.log(lastName);

class Curso {
    name = null;
    canal = null;

    constructor(name, canal) {
        this.name = name;
        this.canal = canal;
    }
}

let meuCurso = new Curso("Typescript", "CFB Cursos");
console.log(meuCurso);
/**
 * Padrão de execução utilizando o ES3 - Utilizando o comando tsc <path/file> --target '[ESVersion]'
 * é feita a compilação para uma versão mais
 * 
 * var Curso = @class (function () {
 *   function Curso(name, canal) {
 *       this.name = null;
 *       this.canal = null;
 *       this.name = name;
 *       this.canal = canal;
 *   }
 *   return Curso;
 * }());
 * var meuCurso = new Curso("Typescript", "CFB Cursos");
 * console.log(meuCurso);
 */
