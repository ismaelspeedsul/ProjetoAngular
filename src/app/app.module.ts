import { AlunosRoutingModule } from './alunos/alunos.routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AlunosModule } from './alunos/alunos.module';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule,
    AlunosModule,
    AppRoutingModule
  ],
  // providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
