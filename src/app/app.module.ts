import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumenComponent } from './resumen/resumen.component';

import { RecursosComponent } from './recursos/recursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    RecursosComponent,
    ContactoComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
