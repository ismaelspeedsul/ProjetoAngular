import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 curso: any[];
 pagina: number;
 inscricao: Subscription;
  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit() {
    this.curso = this.cursoService.getCurso();
   this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
  this.inscricao.unsubscribe();
  }
  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/curso'],
  {queryParams: {'pagina': ++this.pagina}}
  );
  }
  voltarPagina() {
    // this.pagina++;
    this.router.navigate(['/curso'],
  {queryParams: {'pagina': --this.pagina}}
  );
  }
}
