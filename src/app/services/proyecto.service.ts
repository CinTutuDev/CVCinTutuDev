import { Injectable } from '@angular/core';
import { PROYECTO } from 'src/data/mock.proyectos';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  /* Proyecto es el modelo/interface que uso como plantilla para mi data PROYECTO */
  proyectoList: Proyecto[] = PROYECTO;

  constructor() {}

  getProyecto():Proyecto[]{
    return this.proyectoList;

  }

}
