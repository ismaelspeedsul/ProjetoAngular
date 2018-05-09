import { NgModule } from '@angular/core';

// Diferença com mudulo:
        import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
        import { Routes, RouterModule } from '@angular/router';
        import { ModuleWithProviders } from '@angular/compiler/src/core';
        import { CursoComponent } from './curso.component';
        import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

        const cursoRoutes: Routes = [
            { path: 'curso', component: CursoComponent },
            { path: 'cursos/:id', component: CursoDetalheComponent },
            { path: 'nao-encontrado', component: CursoNaoEncontradoComponent }
        ];
// Diferença com mudulo:
@NgModule ({
    imports: [RouterModule.forChild(cursoRoutes)],
    exports: [RouterModule]
} )

export class CursoRoutingModule { }
