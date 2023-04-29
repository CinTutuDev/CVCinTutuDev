import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosComponent } from './shared/pages/repositorios/repositorios.component';
import { AngularComponent } from './shared/pages/angular/angular.component';
import { InspiracionComponent } from './shared/pages/inspiracion/inspiracion.component';
import { DisenioComponent } from './shared/pages/disenio/disenio.component';
import { CursosComponent } from './shared/pages/cursos/cursos.component';


const routes: Routes = [
  { path: 'angular', component: AngularComponent, },
  { path: 'cursos', component: CursosComponent, },
  { path: 'disenio', component: DisenioComponent },
  { path: 'repositorios', component: RepositoriosComponent },
  { path: 'inspiracion', component: InspiracionComponent },
  { path: '**', redirectTo: 'repositorios' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
