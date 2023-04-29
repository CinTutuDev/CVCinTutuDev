import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* componentes */
import { AngularComponent } from './pages/angular/angular.component';
import { InspiracionComponent } from './pages/inspiracion/inspiracion.component';
import { MenuComponent } from './components/menu/menu.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { DisenioComponent } from './pages/disenio/disenio.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { BuscadorBoxComponent } from './components/buscador-box/buscador-box.component';
import { TablaComponent } from './components/tabla/tabla.component';




@NgModule({
  declarations: [
    MenuComponent,
    RepositoriosComponent,
    AngularComponent,
    InspiracionComponent,
    DisenioComponent,
    DisenioComponent,
    CursosComponent,
    BuscadorBoxComponent,
    TablaComponent
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
    DisenioComponent,
    CursosComponent,
    BuscadorBoxComponent

  ]
})
export class SharedModule { }
