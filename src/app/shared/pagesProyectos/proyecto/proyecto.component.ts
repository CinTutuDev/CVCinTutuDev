import { Component, Input } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [
  ]
})
export class ProyectoComponent {
  /* heredo del padre proyectos */
@Input() proyectosData:any;

  constructor(public Bd: BdcintutdevService) {}
}
