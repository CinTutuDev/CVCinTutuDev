import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosComponent } from './shared/pagesRecursos/repositorios/repositorios.component';
import { AngularComponent } from './shared/pagesRecursos/angular/angular.component';
import { InspiracionComponent } from './shared/pagesRecursos/inspiracion/inspiracion.component';
import { CursosComponent } from './shared/pagesRecursos/cursos/cursos.component';


const routes: Routes = [
  { path: 'angular', component: AngularComponent, },
  { path: 'cursos', component: CursosComponent, },
  { path: 'repositorios', component: RepositoriosComponent },
  { path: 'inspiracion', component: InspiracionComponent },
  { path: '**', redirectTo: 'repositorios' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
