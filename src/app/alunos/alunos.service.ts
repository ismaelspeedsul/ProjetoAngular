import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
 private alunos: any[] = [
   { id: 1, nome: 'Aluno 01', email: 'aluno01@hotmail.com' },
   { id: 2, nome: 'Aluno 02', email: 'aluno02@hotmail.com' },
   { id: 3, nome: 'Aluno 03', email: 'aluno03@hotmail.com' },
   { id: 4, nome: 'Aluno 04', email: 'aluno04@hotmail.com' }
 ];
  getAlunos () {
    return this.alunos;
  }
  getAluno(id: number) {
    for ( let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      // tslint:disable-next-line:triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
