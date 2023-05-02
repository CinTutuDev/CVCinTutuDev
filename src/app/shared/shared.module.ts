import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* componentes */
import { AngularComponent } from './pages/angular/angular.component';
import { InspiracionComponent } from './pages/inspiracion/inspiracion.component';
import { MenuComponent } from './components/menu/menu.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { BuscadorBoxComponent } from './components/buscador-box/buscador-box.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    MenuComponent,
    RepositoriosComponent,
    AngularComponent,
    InspiracionComponent,
    CursosComponent,
    BuscadorBoxComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    /* componentes */
    AngularComponent,
    InspiracionComponent,
    MenuComponent,
    CursosComponent,
    BuscadorBoxComponent

  ]
})
export class SharedModule { }
