import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CursoComponent } from './curso.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoService } from './curso.service';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { CursoRoutingModule } from './curso.routing.module';



@NgModule({
    imports: [
        CommonModule,
        CursoRoutingModule

    ],
    exports: [],
    declarations: [
        CursoComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursoService],
})
export class CursoModule { }
