import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* componentes recurosos */
import { AngularComponent } from './pagesRecursos/angular/angular.component';
import { InspiracionComponent } from './pagesRecursos/inspiracion/inspiracion.component';
import { MenuComponent } from './components/menu/menu.component';
import { RepositoriosComponent } from './pagesRecursos/repositorios/repositorios.component';
import { CursosComponent } from './pagesRecursos/cursos/cursos.component';
import { BuscadorBoxComponent } from './components/buscador-box/buscador-box.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { CarruselComponent } from './components/carrusel-cursos/carrusel.component';
import { CarruselRepoComponent } from './components/carrusel-repo/carrusel-repo.component';
import { CarruselAngularComponent } from './components/carrusel-angular/carrusel-angular.component';
import { CarruselInspiracionComponent } from './components/carrusel-inspiracion/carrusel-inspiracion.component';
/* componente proyectos */
import { ProyectoComponent } from './pagesProyectos/proyecto/proyecto.component';
/*A Material */
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    MenuComponent,
    RepositoriosComponent,
    AngularComponent,
    InspiracionComponent,
    CursosComponent,
    BuscadorBoxComponent,
    TablaComponent,
    CarruselComponent,
    CarruselRepoComponent,
    CarruselAngularComponent,
    CarruselInspiracionComponent,
    ProyectoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    /*A Material */
    MatCardModule,
    MatRadioModule,
  ],
  exports: [
    /* componentes */
    AngularComponent,
    InspiracionComponent,
    MenuComponent,
    CursosComponent,
    BuscadorBoxComponent,
    CarruselComponent,
    CarruselRepoComponent,
    CarruselAngularComponent,
    CarruselInspiracionComponent,
    ProyectoComponent
  ],
})
export class SharedModule {}
