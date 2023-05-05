import { Component } from '@angular/core';
import { BdcintutdevService } from 'src/app/services/bdcintutdev.service';

@Component({
  selector: 'app-carruselInspiracion',
  templateUrl: './carrusel-inspiracion.component.html',
  styles: [],
})
export class CarruselInspiracionComponent {
  constructor(public Bd: BdcintutdevService) {}
}
