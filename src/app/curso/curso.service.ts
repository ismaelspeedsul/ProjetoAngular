import { Injectable } from '@angular/core';

export class CursoService {

  getCurso() {
    return[
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Node JS'},
      {id: 3, nome: 'Java Script'}
    ];
  }

  getCursos( id: number ) {
       const curso = this.getCurso();
       for (let i = 0; i < curso.length; i++) {
         const cursos = curso[i];
         // tslint:disable-next-line:triple-equals
         if (cursos.id == id) {
           return cursos;
         }
       }
       return null;
  }
  constructor() { }
}
