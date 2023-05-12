import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { PROYECTO } from 'src/data/mock.proyectos';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [],
})
export class ProyectoComponent {
  constructor() {}

  proyectoList: Proyecto[] = PROYECTO;
}
