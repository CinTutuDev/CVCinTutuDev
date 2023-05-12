import { Component, Input, OnInit } from '@angular/core';
import { ProyectoM } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [],
})
export class ProyectoComponent implements OnInit {
  proyectoList: ProyectoM[] = [];

  constructor(private proyectoS: ProyectoService) {}

  getProyectoList(): void {
    this.proyectoList = this.proyectoS.getProyecto();
  }

  ngOnInit(): void {
    this.getProyectoList();
  }
}
