import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { CursoComponent } from './curso/curso.component';
import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'cursos/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
