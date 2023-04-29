import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* componentes */
import { AngularComponent } from './pages/angular/angular.component';
import { InspiracionComponent } from './pages/inspiracion/inspiracion.component';
import { MenuComponent } from './components/menu/menu.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';




@NgModule({
  declarations: [
    MenuComponent,
    RepositoriosComponent,
    AngularComponent,
    InspiracionComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    /* componentes */
    AngularComponent,
    InspiracionComponent,
    MenuComponent,
    RepositoriosComponent,

  ]
})
export class SharedModule { }
