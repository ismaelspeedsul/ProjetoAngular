import { NgModule } from '@angular/core';

// Diferença com mudulo:
        import { Routes, RouterModule } from '@angular/router';
        import { ModuleWithProviders } from '@angular/compiler/src/core';
        import { LoginComponent } from './login/login.component';
        import { HomeComponent } from './home/home.component';

        const appRoutes: Routes = [
            { path: 'login', component: LoginComponent },
            { path: '', component: HomeComponent }
        ];
// Diferença com mudulo:
        @NgModule ({
            imports: [RouterModule.forRoot(appRoutes)],
            exports: [RouterModule]
        } )

        export class AppRoutingModule { }
