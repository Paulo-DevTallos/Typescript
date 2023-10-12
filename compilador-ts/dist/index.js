"use strict";
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
