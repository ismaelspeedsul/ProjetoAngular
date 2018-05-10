import { AlunosModule } from './../alunos.module';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit { aluno: any;
  inscricao: Subscription;
   constructor(
     private route: ActivatedRoute,
     private alunosService: AlunosService
   ) { }
      ngOnInit() {
     this.inscricao = this.route.params.subscribe(
       (params: any) => {
         const id = params['id'];
         this.aluno = this.alunosService.getAluno(id);
         if (this.aluno === null) {
           this.aluno = { };
         }
       }
     );
   }
   // tslint:disable-next-line:use-life-cycle-interface
   ngOnDestroy(): void {
     this.inscricao.unsubscribe();
   }
  }

