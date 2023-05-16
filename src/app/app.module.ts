import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
/* libreria para peticiones  */
import { HttpClientModule } from "@angular/common/http";
/* componentes */
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { SharedModule } from './shared/shared.module';
/* angular material */

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    /* componentes */
    RecursosComponent,
    ContactoComponent,
    ProyectosComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
