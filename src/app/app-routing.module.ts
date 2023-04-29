import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosComponent } from './shared/pages/repositorios/repositorios.component';
import { AngularComponent } from './shared/pages/angular/angular.component';
import { InspiracionComponent } from './shared/pages/inspiracion/inspiracion.component';


const routes: Routes = [
  { path: 'angular', component: AngularComponent, },
  { path: 'repositorios', component: RepositoriosComponent },
  { path: 'inspiracion', component: InspiracionComponent },
  { path: '**', redirectTo: 'repositorios' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
