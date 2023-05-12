import { Injectable } from '@angular/core';
import { PROYECTO } from 'src/data/mock.proyectos';
import { ProyectoM } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  /* Proyecto es el modelo/interface que uso como plantilla para mi data PROYECTO */
  proyectoList: ProyectoM[] = PROYECTO;

  constructor() {}

  getProyecto():ProyectoM[]{
    return this.proyectoList;

  }

}
