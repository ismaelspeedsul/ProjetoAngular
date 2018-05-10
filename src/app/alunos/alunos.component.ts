import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {
    private alunos: any[] = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private AlunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.AlunosService.getAlunos();
  }

}
