import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

   id: number;
   inscricao: Subscription;
   cursos: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {
       // console.log(route);
    // this.id = this.route.snapshot.params['id'];
    }
      ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params ['id'];
        this.cursos = this.cursoService.getCursos(this.id);
        if (this.cursos == null) {
          this.router.navigate(['/nao-encontrado']);
        }

      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
